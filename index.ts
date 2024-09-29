// require("dotenv").config({
//     path: "./.env",
// });
// require("rootpath")();
// const express = require("express");
// const bodyParser = require("body-parser");
// const router = require("routes/api");
// const { swaggerUIServe, swaggerUISetup } = require("kernels/api-docs");
import rootpath from "rootpath";
rootpath()
import express, { Express } from "express";
import cors from "cors"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import routes from "routes/index.route";

dotenv.config();

const app: Express = express();
app.disable("x-powered-by");

app.use(cors());
app.use(bodyParser.json());
routes(app)
app.use(express.json());

// app.use("/api-docs", swaggerUIServe, swaggerUISetup);

export default app;
