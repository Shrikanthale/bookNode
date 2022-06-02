const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const connection = require('./db')
connection()

const app = express();

app.use(cors())
app.use(express.json())
app.use(require('./router/route'))

const middleware = (req,res,next) => {
    console.log("this is middleware")
    res.send("middleware");
    next();
}

app.get('/', (req,res)=>{
    res.send("You visit on book stall")
    console.log("this is book page")
})

app.listen(1998, () =>{
    console.log("connect on PORT")
})