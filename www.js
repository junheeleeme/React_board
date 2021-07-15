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

app.get('/post/list', board); //게시글 목록 요청
app.post('/post/write/new', board); //게시글 작성
app.post('/post/usercheck?:id', board); //본인 게시글 인증
app.delete('/post/delete?:id', board); //게시글 삭제
app.post('/post/update?:id', board); //게시글 업데이트



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

