import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("solution.ejs"); //this file is to be shown to the client side
});

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length; //created a variable which holds total length of name that user type
  res.render("solution.ejs", { numberOfLetters: numLetters });//passed that variable to ejs file
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
