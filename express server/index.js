//creating an express app which will listen on our system

import express from "express"
const app= express()
const port=3000

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)//this is a callback function it will trigger when our server is ready for listening
})