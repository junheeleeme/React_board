const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({path: 'variables.env'});
const mongo_uri = process.env.MONGODB_URI;
const Post = require("./models/Post");


app.get('/', (req, res)=>{
    const newPost = new Post();
    newPost.no = 1;
    newPost.title = "첫 번째 포스팅입니다."
    newPost.content = "첫 번째 포스팅 내용입니다.!@#!@#@!#"
    newPost.save().then((post)=>{
        console.log(post);
        res.json({
            message: 'Post Created Success!'
        })
    }).catch((err)=>{
        res.json({
            message: 'Post Created fail!'
        })
    })
});


app.listen(3000, (err)=>{
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