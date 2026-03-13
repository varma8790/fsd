const { MongoClient } = require("mongodb")

const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url)

async function run(){

await client.connect()

const db = client.db("testdb")
const col = db.collection("users")

await col.insertMany([
{name:"Alice",age:25},
{name:"Bob",age:30},
{name:"Charlie",age:22},
{name:"David",age:35},
{name:"Eva",age:28}
])

console.log("Count:", await col.countDocuments())

console.log("Limit:", await col.find().limit(3).toArray())

console.log("Sort:", await col.find().sort({age:-1}).toArray())

console.log("Skip:", await col.find().skip(2).limit(2).toArray())

await client.close()
}

run()
