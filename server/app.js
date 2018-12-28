import express from "express";
import path from "path";
import logger from "morgan";
import createError from "http-errors";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../react")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../react", "index.html"));
});

app.use((req, res, next) => {
  next(createError(404));
});

export default app;
