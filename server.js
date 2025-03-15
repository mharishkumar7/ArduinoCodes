const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to receive data from ESP8266
app.post("/data", (req, res) => {
    const receivedData = req.body.value;
    console.log("Data received from ESP8266:", receivedData);
    res.json({ status: "success", receivedValue: receivedData });
});

// Start server

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

