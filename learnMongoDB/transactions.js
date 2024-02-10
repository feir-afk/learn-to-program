require("dotenv").config();
const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// Collections
const accounts = client.db("Test").collection("accounts");
const transfers = client.db("Test").collection("transfers");

// Account information
let account_id_sender = "456789123";
let account_id_receiver = "987654321";
let transaction_amount = 200;

// Start the client session
const session = client.startSession();

// use withTransaction to start a transaction, execute the callback, and commit in transaction
// The callback for withTransactions must be async/await
// Note: Each individual operation must be await and have the session passed in as an argument
const main = async () => {
	try {
		await connectToDatabase();
		const transactionResults = await session.withTransaction(async () => {
			// Step 1: Update the account sender balance
			const updateSenderResult = await accounts.updateOne(
				{ account_id: account_id_sender },
				{ $inc: { balance: -transaction_amount } },
				{ session }
			);
			console.log(
				`${updateSenderResult.matchedCount} document(s) matched the filter, updated ${updateSenderResult.modifiedCount} document(s) for sender account`
			);
			// Step 2: Update the account receiver balance
			const updateReceiverResult = await accounts.updateOne(
				{ account_id: account_id_receiver },
				{ $inc: { balance: transaction_amount } },
				{ session }
			);
			console.log(
				`${updateReceiverResult.matchedCount} document(s) matched the filter, updated ${updateReceiverResult.modifiedCount} document(s) for receiver account`
			);

			// Step 3: Insert the transaction document
			const transfer = {
				transfer_id: new ObjectId(),
				amount: transaction_amount,
				from_account: account_id_sender,
				to_account: account_id_receiver,
			};

			const insertTransferResults = await transfers.insertOne(transfer, {
				session,
			});
			console.log(
				`Successfully inserted ${insertTransferResults.insertedId} into the transfers collection`
			);

			// Step 4: Update the balance field of the sender’s account by decrementing the transaction_amount from the balance field.
			const updateSenderTransferResults = await accounts.updateOne(
				{ account_id: account_id_sender },
				{ $push: { transfer_complete: transfer.transfer_id } },
				{ session }
			);
			console.log(
				`${updateSenderTransferResults.matchedCount} document(s) matched in transfers collection, updated ${updateSenderTransferResults.modifiedCount}`
			);

			// Step 5: Update the balance field of the receiver’s account by incrementing the transaction_amount to the balance field.
			const updateReceiverTransferResults = await accounts.updateOne(
				{ account_id: account_id_receiver },
				{ $inc: { balance: transaction_amount } },
				{ session }
			);
			console.log(
				`${updateReceiverTransferResults.matchedCount} document(s) matched in transfers collection, updated ${updateReceiverTransferResults.modifiedCount}`
			);
		});

		console.log("Committing transactions ...");
		// If the callback for withTransaction returns successfully without throwing an error, the transaction will be committed
		console.log(transactionResults);
		if (transactionResults) {
			console.log("Transaction completed successfully.");
		} else {
			console.log("Transaction failed.");
		}
	} catch (err) {
		// Transaction maximum runtime is 60 secs by default
		console.error(`Transaction abort: ${err}`);
		process.exit(1);
	} finally {
		await session.endSession();
		await client.close();
	}
};

const connectToDatabase = async () => {
	try {
		await client.connect();
		console.log(`Connected to database \nFull connection string: ${uri}\n`);
	} catch (err) {
		console.error(`Error connecting to the database: ${err}`);
	}
};

main();
