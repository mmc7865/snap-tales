const express = require("express");
const app = express();
const userRouter = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const postRouter = require("./routes/post.routes");

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);
app.use("/users", userRouter);
app.use("/users", postRouter);

module.exports = app;
