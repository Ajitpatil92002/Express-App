const express = require("express");


const postRoute = require("./routes/post");


const app = express();

app.set("view engine", "ejs");
const PORT = 3000 ;

app.use("/" , postRoute)



app.listen(PORT, (err)=>{
    if(err){
        console.log(err)
} else{
    console.log("Server Activated! at port" +PORT);
}
})