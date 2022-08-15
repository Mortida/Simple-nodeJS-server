require("dotenv").config(); // Environment Variable
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbconnection = require("./config/db");
const router = require("./routes/cardsRoute");

const app = express(); // Express App

// Middle Ware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(req.method, "To", req.path);
  next();
});

app.use("/api/cards", router);

// connect to DB
dbconnection.getConnection((err, conn) => {
  if (conn) {
    app.listen(process.env.PORT, () => {
      console.log("Conected to DB & listening on port", process.env.PORT);
    });
  }
  if (err) {
    console.log(err.message);
  }
});
