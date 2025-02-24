const express =require("express")
const app =express();
app.get("/login",(req,res)=>(
    res.send("bem vindo ao login")
));

app.get("/sistema",(req,res)=>(
    res.send("acessando o sistema")
))

app.listen(3000,()=>(
    console.log("servidor rodando na porta 3000")
))