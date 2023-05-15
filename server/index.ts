import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv'

import routes from "./routes/routes";

dotenv.config()

const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// app.use(express.urlencoded({ extended: false }));

// app.use(express.json());

app.use("/", routes);

app.listen(8000, () => {
  console.log("Server started!");
});
