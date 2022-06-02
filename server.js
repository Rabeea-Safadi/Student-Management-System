require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
    res.render("index");
});

app.use("/api/students", require("./routes/students"));
app.use("/api/parents", require("./routes/parents"));

app.listen(3031);