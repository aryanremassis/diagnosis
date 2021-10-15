const express = require("express");
const diagnosis = require("./diagnosis/diagnosis.route");

const app = express();

app.use("/diagnosis", diagnosis);

app.listen(5000, () => console.log("Server running"));
