const express=require("express");
const app=express();
const port=3000;
app.get("/",(req,resp)=>{
    resp.send("<h1>Welcome Mangya & Teddy</h1>");
});
app.listen(port);