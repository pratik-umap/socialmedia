const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors=require("cors")

if (process.env.NODE_END !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// using middleware
app.use(cors({ origin: true }))
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());


// importing routes
const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

// using routes
app.use("/api/v1", postRoute);
app.use("/api/v1", userRoute);

module.exports = app;
