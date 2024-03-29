const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

if (process.env.NODE_END !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// using middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// static file
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "/build")));

// app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/build/index.html"));
// });

=======
app.use(express.static(path.join(__dirname,"/build")))

app.get('/',function(req,res) {
   res.sendFile(path.join(__dirname,"/build/index.html"))
})

>>>>>>> 7b2cf8fbcabd2876da36a7f20fa6f6b414e29c0f
// importing routes
const postRoute = require("./routes/post");
const userRoute = require("./routes/user");

// using routes
app.use("/api/v1", postRoute);
app.use("/api/v1", userRoute);

module.exports = app;
