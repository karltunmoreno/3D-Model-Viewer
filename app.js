const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const designRoutes = require("./controllers/designController");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Routes
app.use("/", designRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
