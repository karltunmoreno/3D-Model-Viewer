

const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(
  "/shared-assets",
  express.static(path.join(__dirname, "shared-assets"))
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
