const express = require("express");
const route = express.Router();
const webhookData = require("./helper.js");
const logger = require("../logger");
//Post Method
route.post("/", async (req, res) => {
  try {
    logger.debug(req?.body);
    const response = await webhookData.getDataFromWebhook(req.body);
    if (response?.error) {
      logger.error(response);
      res.status(400).json({ message: response });
    } else if (response) {
      // logger.info("Final response", response);
      res.status(200).json(response);
    }
  } catch (error) {
    logger.error(response);
    res.status(400).json({ message: error.message });
  }
});

module.exports = route;
