const express = require("express");
const triggerTwillioCall = require("../controllers/twillio.controller");
const { get } = require("mongoose");
const router = express.Router();
const Contact = require("../models/contact");

router.get("/call", async (req, res) => {
  const { toPhoneNumber } = req.query;
  console.log("toPhoneNumber", toPhoneNumber);
  const result = triggerTwillioCall(toPhoneNumber);

  return res.json({
    result,
  });
});

module.exports = router;
