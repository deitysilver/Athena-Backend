import express from "express";
import dotenv from "dotenv";
import helloAthena from "./api/helloAthena.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3005;

app.use("/", helloAthena);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
