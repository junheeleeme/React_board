"use strict"

const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(path.join(__dirname, '../dist')));
//정적 파일 제공을 위한 선언


router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname), '../dist/index.html');
});


module.exports = router;