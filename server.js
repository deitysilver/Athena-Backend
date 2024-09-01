import express from "express";
import dotenv from "dotenv";
import helloAthena from "./api/helloAthena.js";
import area from "./api/cargo/area.js";

import bodyParser from "body-parser"

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
})); 

const PORT = process.env.PORT || 3005;

app.use("/", helloAthena);
app.use("/", area);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
