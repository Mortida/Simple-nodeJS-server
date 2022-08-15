const express = require("express");
const {
    getAllCards,
} = require("../controller/cardsController");

const router = express.Router();

router.get("/", getAllCards);

module.exports = router;
