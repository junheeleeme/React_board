const mongoose = require("mongoose");
require("dotenv").config({path: 'variables.env'});
const mongo_uri = process.env.MONGODB_URI;


mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Connected to DB success!");
    }
})