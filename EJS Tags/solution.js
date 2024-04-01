import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = { //key value pair data object
    title: "EJS Tags",
    seconds: new Date().getSeconds(), // it will get current seconds accordings to your system
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
  };
  res.render("solution.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
