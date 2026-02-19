import express from 'express';
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();


connectDB()

app.get("/", (req, res) => res.send("Hello World!"));



app.listen(5001, () => console.log("Server is up on Port 5001"));