const express = require("express")
const dotEnv = require('dotenv')

const {MongoClient}= require("mongodb")

const app = express()

dotEnv.config()

MongoClient.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb connected Successfully")
})
.catch((error)=>{
    confirm.log("Error",error)
})
const PORT = 5000

console.log(process.env)

app.listen(PORT, () => {
    console.log('servere started and running at ${PORT')
})