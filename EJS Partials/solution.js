import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public")); //step 2 completed
app.get("/", (req, res) => {
  res.render("index.ejs"); //step 1 completed
});

app.get("/about", (req, res) => {
  res.render("about.ejs");//step 3 completed
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs"); //step 3 completed
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
