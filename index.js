//Dependencies
import express from "express";
import dotenv from "dotenv";
import { router as initRouter } from "./routes/initRouter.js";
import productRouter from "./routes/productRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import userRouter from "./routes/userRoute.js";

// dotenv modul
dotenv.config();

// port declaration
const port = process.env.PORT || 3000;

// App object
const app = express();
app.use(express.urlencoded({ extended: true }));

//Router bundles
app.use(initRouter);
app.use(productRouter);
app.use(categoryRouter);
app.use(userRouter);

//Run server
app.listen(port, () => {
	console.log(`Webserver running on http://localhost:${port}`);
});
