const express=require('express')
const db=require('./db')
const cors = require('cors')


const app=express()

app.use(express.json())
app.use(cors())

app.get('/ping', (req, res) => {
    res.send('pong')
})


app.listen(9000,()=>{
    console.log("Api running on 9000")
})