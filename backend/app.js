const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

if (process.env.NODE_END !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// using middleware
<<<<<<< HEAD
=======
app.use(
  cors({
    origin: ["https://clever-sfogliatella-1a31e7.netlify.app"],
    optionsSuccessStatus: 200,
  })
);
>>>>>>> adef099e12f70d2e438886c403ca5601b7426216
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

