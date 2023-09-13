import dotenv from "dotenv";
dotenv.config();

import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import mongoose from "mongoose";

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("error", (error: Error) => console.log(error));

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");
});
