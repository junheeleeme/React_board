"ust strict"

const express = require('express');
const board = express.Router();
const Post = require("../models/Post");
const bcrypt = require('bcrypt');

const bodyParser = require('body-parser');                                                                     

board.use(bodyParser.json());
board.use(bodyParser.urlencoded({extended : true}));

//게시글 조회
board.post('/post', (req, res)=>{

    Post.findOne({title : req.body.title, body : req.body.body, nicName : req.body.nic},
        {_id : true}).then((no)=>{ //작성 완료된 글 id 조회 후 전달
        
        res.status(200).send(no._id);

    }).catch((err)=>{
        console.log(err);
        res.sendStatus(400).send('DB Errer');
    });

});

//게시글 목록 요청
board.get('/post/list', (req, res)=>{

    Post.countDocuments().then((cnt)=>{
        
        Post.find({}, {passwd : false, updatedAt: false}).then((post)=>{ //모든 post 조회
            
            const _post = [[...post],
                            {count : cnt}];
    
            res.status(200).send(_post);

        }).catch((err)=>{
            console.log(err);
            res.sendStatus(400).send('DB Errer');
        });

    }).catch(err => {
        console.log(err);
    })

});

//게시글 작성
board.post('/post/write/new', (req, res)=>{

    const newPost = new Post();
    const encrypted_PW = bcrypt.hashSync(req.body.passwd, 5); //비밀번호 암호화


    newPost.title = req.body.title;
    newPost.body = req.body.body;
    newPost.nicName = req.body.nic;
    newPost.passwd = encrypted_PW;
    
    newPost.save().then((post)=>{
        res.status(200).send('OK');
        console.log("Input Data");
        console.log(post);

    }).catch((err)=>{
        res.status(400).send('Failed Insert DB');
    });

});

//본인 게시글 인증 - bcrypt 사용
board.post('/post/usercheck?:id', (req, res)=>{

    const no = req.query.no;
    const reqPasswd = req.body.passwd;

    Post.findOne({_id : no}, {passwd : true}).then((post)=>{

        bcrypt.compare(reqPasswd, post.passwd, (err, same)=>{
            
            if(!err){
                if(!same){ //인증 성공
                    res.status(400).send();
                }else{
                    res.status(200).send();
                }
            }else{
                console.log(err);
                res.status(400).send();
            }

        });
    }).catch((err)=>{
        console.log(err);
    })
    
});

//게시글 삭제
board.delete('/post/delete?:id', (req, res)=>{
    
    const no = req.query.no;

    Post.deleteOne({_id : no}).then((post)=>{
        console.log('Deleted Data');
        console.log(post);
        res.status(200).send('Delete!');
    }).catch((err)=>{
        console.log(err);
        res.status(400).send('DB Errer');
    });
    
});

//게시글 업데이트
board.post('/post/update?:id', (req, res) =>{

    const no = req.query.no;

    Post.update({_id : no}, {title : req.body.title, body : req.body.body })
    .then((post)=>{
        console.log('Updated Data');
        console.log(post);
        res.status(200).send();
    }).catch((err)=>{
        console.log(err);
        res.status(400).send();
    });

})

module.exports = board;