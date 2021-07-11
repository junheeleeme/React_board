const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose");
require("dotenv").config({path: 'variables.env'});
const mongo_uri = process.env.MONGODB_URI;
const port = process.env.PORT;
const Post = require("./models/Post");
const bodyParser = require('body-parser');                                                                     

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname, './dist')));
//정적 파일 제공을 위한 선언


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname), './dist/index.html');
});

app.get('/post/list', (req, res)=>{

    Post.find({},'title').then((post)=>{
        console.log(post);
        res.status(200).send(post);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(400).send('DB Errer');
    });

});

app.get('/post', (req, res)=>{

    const no = req.query.no;
    
    Post.findOne({_id : no}).then((post)=>{
        console.log(post);
        res.status(200).send(post);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(400).send('DB Errer');
    });
    
});


app.post('/post/write/new', (req, res)=>{

    const newPost = new Post();

    newPost.title = req.body.title;
    newPost.body = req.body.body;

    newPost.save().then((post)=>{
        res.status(200).send('OK');
        console.log("Input Data");
        console.log(post);
    }).catch((err)=>{
        res.status(400).send('Failed Insert DB');
    });

});

app.delete('/post/delete?:id', (req, res)=>{
    
    const no = req.query.no;

    Post.deleteOne({_id : no}).then((post)=>{
        console.log(post);
        res.status(200).send('Delete!');
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(400).send('DB Errer');
    });
    
});


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



// POST 데이터 삽입
