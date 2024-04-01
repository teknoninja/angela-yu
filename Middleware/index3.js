import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next){
  console.log("Request method",req.method)
  console.log("Request url",req.url)
  next()//ye likhna zruri h warna app.get ke andar vala code nhi run ho payega

}
app.use(logger); //

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
