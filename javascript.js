const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/shared-assets/models/NeilArmstrong.glb", (req, res) => {
  res.sendFile("/shared-assets/images/NeilArmstrong.webp");
});
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
