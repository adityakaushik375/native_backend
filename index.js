import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import transactionRoute from "./route/transactionRoute.js";
import job from "./config/cron.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT;
if (process.env.NODE_ENV === "production") job.start();

app.get("/", (req, res) => {
  console.log("hello express");
  res.send("hello999999999999999999999999999999");
});

app.use('/api/transaction',transactionRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
