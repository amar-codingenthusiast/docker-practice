const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const MONGO_URL = "mongodb://admin:amar@localhost:27017";
const client = new MongoClient(MONGO_URL);

// GET all users
app.get("/getUsers", async (req, res) => {
	try {
		await client.connect(MONGO_URL);
		console.log("Connected successfully to server");
		const db = client.db("amar");
		const data = await db.collection("users").find({}).toArray();
		res.status(200).json(data);
	} catch (err) {
		console.error("Error fetching users:", err);
		res.status(500).json({ message: "Failed to fetch users" });
	} finally {
		client.close();
	}
});

// POST new user
app.post("/addUser", async (req, res) => {
	try {
		const userObj = req.body;
		console.log("Incoming user:", userObj);
		await client.connect(MONGO_URL);
		console.log("Connected successfully to server");
		const db = client.db("amar");
		const result = await db.collection("users").insertOne(userObj);
		console.log("Inserted:", result.insertedId);
		res.status(200).json({ message: "User added successfully!" });
	} catch (err) {
		console.error("Error inserting user:", err);
		res.status(500).json({ message: "Failed to add user" });
	} finally {
		client.close();
	}
});

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
