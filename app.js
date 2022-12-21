const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send({ message: "oke" });
});

// listen server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
