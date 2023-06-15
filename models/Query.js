const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuerySchema = new Schema(
    {
        name : {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        subject:{
            type: String,
            required: true
        },
        desc:{
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("querie", QuerySchema);
