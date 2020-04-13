import dotenv from "dotenv";
dotenv.config();
import express from "express";
import homeRouter from "./routes/homeRouter.js";

const app = express();

const port = process.env.PORT;

app.use("/", homeRouter);

app.listen(port, () => {
    console.log(`Web app listening at http://localhost:${port}`)
});
