import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));//yeh to liknha hi pdega hume user se data lena h body parser ki help se

function passwordCheck(req, res, next) {//custom middleware to check if user is authorised or not
  const password = req.body["password"];//request body m password field m jo entery hogi wo password variable m save hoga
  if (password === "ILoveProgramming") {//password variable ko compare kiya
    userIsAuthorised = true;
  }
  next();
}
app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    // res.redirect("/");   Alternatively redirect krne pr wo usi page pr chla jaega
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
