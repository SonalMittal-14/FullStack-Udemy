import express from "express"
const app = express()
const port = 3000

app.get("/", (req,res) =>{
    res.send("<h1>Hello!! From Sonal.</h1> <h2>Kese ho app log ????</h2>")
})

// app.get("/about", (req,res) =>{
//     res.send("<h1>I am a final year student.</h1>")
// })

app.post("/register",(req,res)=>{
    res.sendStatus(201);
})

app.put("/user/sonal",(req,res)=>{
    res.sendStatus(202);
})

app.patch("/user/sonal",(req,res)=>{
    res.sendStatus(200);
})

app.delete("/user/sonal",(req,res)=>{
    res.sendStatus(200);
})

app.listen(port, ()=>{
    console.log(`Server chal raha h port ${port} par.`);
})