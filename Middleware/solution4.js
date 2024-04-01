import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";//empty string

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {//iske andar jo code likha h wo app.post m bhi likh skte ho
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {//setting route handlers
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {//setting route handlers
  // bandName = req.body["street"] + req.body["pet"];
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
