const express = require("express");
const mongoose = require("mongoose");
const database = require("./config/db");
const dotenv = require("dotenv"); // Enviroment Variables Global

//config accessing the global variables
dotenv.config({ path: "./config/config.env" });

database();
const app = express();

//Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/", require("./routes/index"));
app.listen(PORT, console.log(`Server is running on port ${PORT}`));