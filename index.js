const express = require("express");
const app = express();
const logger = require("./middlewares/logger");
const memberRouter = require("./routes/api/memberRoute");
const cors = require("cors");
//app.use(logger);
app.use(cors());
app.use(express.json());
app.use("/members", memberRouter);

module.exports = app;
