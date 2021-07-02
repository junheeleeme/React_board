"use strict";
// 모듈
const express = require('express');
const path = require('path');
const web = express();
const port = 9090;


web.use('/', express.static(path.join(__dirname, 'dist/')));


web.get('/', function(req, res){
    console.log("hello");
    res.sendFile(path.join(__dirname, 'index.html'));
    
})


web.listen(port, () =>{
    console.log('Express App on port ' + port + '!');    
});