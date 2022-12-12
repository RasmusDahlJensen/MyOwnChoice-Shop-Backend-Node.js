//Dependencies
import express from "express";
import dotenv from "dotenv";

// dotenv modul
dotenv.config();

// port declaration
const port = process.env.PORT || 3000;

// App object
const app = express();

//Run server
app.listen(port, () => {
	console.log(`Webserver running on http://localhost:${port}`);
});
