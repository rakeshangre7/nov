require("dotenv").config();
const cors = require("cors");
const express = require("express");
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./webhookAPI/webhookAPI");

app.use("/webhook", routes);

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
