const mongoose = require("mongoose");
const { SingleEntryPlugin } = require("webpack");
const { Schema } = mongoose;

const postSchema = new Schema({
        title : {
            type : String,
        },
        content : {
            type : String,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Post', postSchema);