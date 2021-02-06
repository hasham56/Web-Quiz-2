const express = require("express");
const app = express();
app.use(express.json()); //middleware
app.use(express.static("public")); // serve files from public folder
app.set("view engine", "pug"); //setting pug as view engine

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/", (req, res) => {
  res.render("homepage");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Our app is running on port ${ port}`);
});