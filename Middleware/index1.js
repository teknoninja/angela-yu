import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser"
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));//the above three lines of codes ensures that the file that we want to send back over to the client is our index.html.In order to get the full path of that particular file we have tow rite these three lines
//When your server is hosted on a cloud computer, when it's no longer locally hosted, as is the case for most servers, then in order to figure out this directory name where the file lives in, it takes a little bit of work.
// And these are the lines of code that are required for this.

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");//in tis case we are not sending html but an entire file ,the file that we want to send back over to the client is our index.html.
});
app.post("/submit",(req,res)=>{ ///submit is route where your data will go after submission of form as it was written in index.html in action field
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
