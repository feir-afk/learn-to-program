const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
const dbName = "Test";
const collectionName = "Info";
const testCollection = client.db(dbName).collection(collectionName);

const connectToDatabase = async () => {
	try {
		await client.connect();
		console.log(
			`Connected to "${dbName}" database \nFull connection string: ${uri}\n`
		);
	} catch (err) {
		console.error(`Error connecting to the database: ${err}`);
	}
};

const main = async () => {
	try {
		await connectToDatabase();

		deleteOne;
		const resultOfDelete = await testCollection.deleteOne(deleteDocument);
		console.log(
			resultOfDelete.deletedCount === 1
				? "One document deleted"
				: "Failed to delete document"
		);

		deleteMany;
		const resultOfDeleteMany = await testCollection.deleteMany(deleteDocument);
		console.log(
			resultOfDeleteMany.deletedCount > 0
				? "One document deleted"
				: "Failed to delete document"
		);

		updateOne;
		const result = await testCollection.updateOne(updateDocument, update);
		console.log(
			result.modifiedCount === 1
				? "Updated one document"
				: "Failed to update document"
		);

		// updateMany;
		const resultUpdateMany = await testCollection.updateMany(
			updateDocument,
			update
		);
		console.log(
			resultUpdateMany > 0
				? `Updated ${resultUpdateMany.matchedCount} document(s)`
				: "Failed to update document(s)"
		);

		// list of database
		const databaseList = await client.db().admin().listDatabases();
		databaseList.databases.forEach((db) => console.log(`- ${db.name}`));

		// insertOne;
		const resultOfInsert = await testCollection.insertOne(sampleData);
		console.log(`Inserted document: ${resultOfInsert.insertedId}`);
		console.log(resultOfInsert);

		// insertMany
		const resultOfInsertMany = await testCollection.insertMany(sampleData);
		console.log(`Inserted ${resultOfInsertMany.insertedCount} documents`);
		console.log(resultOfInsertMany);

		// find - Many
		let resultOfFind = testCollection.find(documentsToFind);
		let docCount = testCollection.countDocuments(documentsToFind);
		await resultOfFind.forEach((doc) => console.log(doc));
		console.log(`Found ${await docCount} documents`);
	} catch (err) {
		console.error(`Error connecting to the database: ${err}`);
	} finally {
		await client.close();
	}
};

main();
