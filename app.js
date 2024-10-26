const express = require("express");
const inventryRouter = require("./routes/inventryRouter");
const path = require("node:path");
const app = express();
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));
app.use("/", inventryRouter);
app.listen(3000);
