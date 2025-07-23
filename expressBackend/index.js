import express from 'express'
import morgan from 'morgan'
import {dirname} from "path"
import { fileURLToPath } from 'url'
const app=express()

const __dirname=dirname(fileURLToPath(import.meta.url))
// app.use(morgan("combined"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req,res,next)=>{
    console.log(req.method+" "+req.url);
    next()
})

app.get('/',(req,res)=>{
    return res.send("<h1>hello</h1>")
})
app.get('/form',(req,res)=>[
    res.sendFile(__dirname+"/index.html")
])
app.post('/submit',(req,res)=>{
    console.log(req.body);
    res.send(`<h1>${req.body.name}</h1>`)
})
app.get('/about',(req,res)=>{
    return res.send("<h1>about</h1>")
})

app.get('/contact',(req,res)=>{
    return res.send("<h1>contact</h1>")
})
app.put('/put',(req,res)=>{
    return res.sendStatus(200);
})

app.post('/post',(req,res)=>{
    return res.sendStatus(200);
})
app.patch('/patch',(req,res)=>{
    return res.sendStatus(200);
})
app.delete('/delete',(req,res)=>{
    return res.sendStatus(200);
})
app.listen(3000,()=>{
    console.log("server is listening");
    
})