
const fs=require("fs")

// to write in the local file

// fs.writeFile("message.txt","hi my name is shivam",(err)=>{
//     if (err)throw err
//     console.log("the file has been saved")
// })

// to read from the local file utf 8 is the encoding output(english output) otherwise it will give a buffer output (not understanadable)

fs.readFile("./message.txt",'utf8',(err,data)=>{
    if(err)throw err
    console.log(data)
})