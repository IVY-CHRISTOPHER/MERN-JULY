const express = require("express");
const app = express();
const port = 5173;

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "Oh No! Dont do that!" });
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );