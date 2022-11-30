const express = require("express");

const app = express();
const PORT = 3000 ;

app.get("/", (req,res)=>{
    res.json("Hello World!")
})



app.listen(PORT, (err)=>{
    if(err){
        console.log(err)
} else{
    console.log("Server Activated! at port" +PORT);
}
})