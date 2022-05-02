/* eslint-disable no-mixed-spaces-and-tabs */
import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products/:id", (req, res) => {
	const product = data.products.find((x) => x._id === req.params.id);
	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: "Product Not Found" });
	}
});

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
