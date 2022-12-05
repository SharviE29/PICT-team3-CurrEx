const mongoose=require('mongoose')

const url='mongodb://localhost/currencyexchange'

const connectToMongo=()=>{
    mongoose.connect(url,{useNewUrlParser:true},()=>{
        console.log("connected to mongo!")
    })
}

module.exports=connectToMongo