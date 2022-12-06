// const mongoose=require('mongoose')

// const url='mongodb://localhost/currencyexchange'

// const connectToMongo=()=>{
//     mongoose.connect(url,{useNewUrlParser:true},()=>{
//         console.log("connected to mongo!")
//     })
// }

// module.exports=connectToMongo


const { MongoClient } = require("mongodb");

const url = "mongodb://localhost/";

const dbName = "currencyexchange";

const client = new MongoClient(url);

const connectToMongo = async () => {
    try {
        await client.connect();
        console.log("Connected to mongo!");

        
    } catch (error) {
        console.log(error);
    }
};

console.log("IN DB.JS");

connectToMongo()


module.exports = client;