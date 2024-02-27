const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  //   console.log(`data received`);
});

customEmitter.on("response", (id, name) => {
  console.log(`User Info:\nID:${id}\nName:${name}`);
});

customEmitter.emit("response", 4375, "Adam");
