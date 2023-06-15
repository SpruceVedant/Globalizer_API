const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSOPschema = new Schema(
    {
        studentId : {
            type: mongoose.Schema.Types.ObjectId, ref : 'studentprofile', 
            required: true
        },
        sop : {
            type: String,
            required: true
        },
        price:{
            type: mongoose.Types.Decimal128
        },
        paymentStatus:{
            type: Boolean
        },
        orderId : {
            type: String,
            required: true,
            unique: true,
        },
        projectId : {
            type:String, 
            required:true, 
            unique:true
        },
        workStatus :{
            type:String,
            required:true
        }
    }
);

module.exports = mongoose.model("reviewsop", ReviewSOPschema);
