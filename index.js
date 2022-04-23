const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

//use middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Running my node crud server");
});

app.listen(port, () => {
  console.log("CRUD server is running");
});

//user name : dbuser1
//password : mIT1XClrS9XzCZwP

const uri =
  "mongodb+srv://dbuser1:mIT1XClrS9XzCZwP@cluster0.ekt0p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("users");
    const user = { name: "mahiya mahi", email: "aab@gmail.com" };
    const result = await userCollection.insertOne(user);
    console.log(`user Inserted With Id ${result.insertedId}`);
  } finally {
    // await client.close()
  }
}

run().catch(console.dir);
