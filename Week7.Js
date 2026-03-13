const { MongoClient } = require("mongodb")

const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url)

async function run(){

await client.connect()

const db = client.db("crudDB")
const collection = db.collection("users")

// CREATE
await collection.insertOne({name:"John",age:25})
console.log("Document inserted")

// READ
const data = await collection.find().toArray()
console.log("Documents:",data)

// UPDATE
await collection.updateOne(
{name:"John"},
{$set:{age:30}}
)
console.log("Document updated")

// DELETE
await collection.deleteOne({name:"John"})
console.log("Document deleted")

await client.close()
}

run()
