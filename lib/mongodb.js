import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to env file")
}

client = new MongoClient(uri, options)
clientPromise = client.connect()
// const clientPromise = async () => {
//   await client.connect()
//   console.log("Connected successfully to server")
// }

export default clientPromise
