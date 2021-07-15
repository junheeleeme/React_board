"ust strict"

const express = require("express");
const app = express();
const router = require('./routes/router');
const board = require('./routes/board');
const mongoose = require("mongoose");

require("dotenv").config({path: 'variables.env'});
const mongo_uri = process.env.MONGODB_URI;
const port = process.env.PORT;
const Post = require("./models/Post"); //몽고DB 스키마 모델


app.use('/', router);

app.get('/post/list', board);
app.post('/post/write/new', board);
app.delete('/post/delete?:id', board);
app.post('/post/usercheck?:id', board);
app.post('/post/update?:id', board);



app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }else{
        mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
            if(err){
                console.log(err)
            }else{
                console.log("Connected to DB success!");
            }
        })
    }
})

