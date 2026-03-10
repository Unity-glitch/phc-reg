const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

const dbName = "PHC-Form";
let collection;

// Connect once when server starts
async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    collection = db.collection("registrations");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

connectDB();

// ------------------------
// Store form submission
// ------------------------
app.post("/phc-form", async (req, res) => {
  try {
    const result = await collection.insertOne(req.body);

    res.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to register",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
