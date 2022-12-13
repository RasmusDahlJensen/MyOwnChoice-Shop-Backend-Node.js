//Dependencies
import express from "express";
import dotenv from "dotenv";
import { router as initRouter } from "./routes/initRouter.js";

// dotenv modul
dotenv.config();

// port declaration
const port = process.env.PORT || 3000;

// App object
const app = express();

app.use(initRouter);

//Run server
app.listen(port, () => {
	console.log(`Webserver running on http://localhost:${port}`);
});
