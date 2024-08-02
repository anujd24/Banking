const express = require("express");

// const mongoose = require("mongoose");
const rootRouter = require("./routes/index")
// const userRouter = require("./user");
const cors = require("cors");
const app = express();
console.log("started");
app.use(cors());
app.use(express.json());

 app.use("/api/v1" , rootRouter);

app.listen(3000);