// const express=require('express')
// const db=require('./db')
// const cors = require('cors')


// const app=express()

// app.use(express.json())
// app.use(cors())

// app.get('/ping', (req, res) => {
//     res.send('pong')
// })


// app.

// app.listen(9000,()=>{
//     console.log("Api running on 9000")
// })


const express = require("express");
const client = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
    res.send("pong");
});


app.get('/graph/monthly', async (req,res) => {
    
})


app.get("/curr/", async (req, res) => {
    let year = 'Year_';
    year += req.body.year;


    console.log(year);

    try {
        const db = client.db("new_test");
        const col = db.collection("2012_data");
        const data = await col.aggregate([
            {$unwind: "$"+year },
            {$group: {_id: "$"+year}},
            {$group: {_id: "$_id.CURR"}}
        ]).toArray();
        
        res.send(data);

    } catch (error) {
        console.log(error);
    }
});

app.listen(8000, () => {
    console.log("Api running on 9000");
});