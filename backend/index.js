// jshint esversion: 6
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes")
require("dotenv").config();

app.use(cors());
app.use(express.json());

//database connection
async function dbConnect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("connected to database successfuly");
    } catch (error) {
        console.log(error);
    }
}
dbConnect();

app.get("/", (req, res) => {
    res.send({ msg: "Welcome, you are on home page" })
})

//routes
app.use("/api/auth", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`the server is running on port ${process.env.PORT}`);
})