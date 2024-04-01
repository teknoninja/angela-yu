import express from "express"
const app = express()
const port = 3000

app.get("/",(req, res)=>{ ///is the path where hou want to send your request
    // console.log(req.rawHeaders) //this gives the imformation where the req is originated (google chrome) what system on running (windows )and more imformation
    res.send("<h1>Hello World<h1/>")
} )
app.get("/contact",(req, res)=>{ 
   
    res.send("<h1>Phone Number: 9717088721<h1/>")
} )
app.get("/about",(req, res)=>{ 
    
    res.send("<p>lorem 30<p/>")
} )
app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})