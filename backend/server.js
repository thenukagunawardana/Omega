import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
	res.send(data.products);
});

app.get("/", (req, res) => {
	res.send("Server is ready");
});

const port = process.env.PORT || 4000;
app.listen(4000, () => {
	console.log(`Serve at http://localhost:${port}`);
});
