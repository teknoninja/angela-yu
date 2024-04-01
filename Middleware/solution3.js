import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) { //custom middle will perform this function
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

app.use(logger);//making a custom middleware

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
