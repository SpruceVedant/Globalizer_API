const bodyParser = require('body-parser');
const RSOP = require('../models/ReviewSOP');
const crypto = require('crypto');

// exports.getSop = (req, res, next) =>{
//     res.end();
// };

const generateOrderID = async () => {
    let id = crypto.randomInt(1000, 100000000);
  
    let idExists = await RSOP.findOne({ orderId: id });
  
    while (idExists) {
      id = crypto.randomInt(1000, 100000000);
      idExists = await RSOP.findOne({ orderId: id });
    }
  
    return id;
  };

exports.getReviewSop = async (req, res, next) =>{
    // const text = JSON.stringify(req.body.text);
    const { sop, price, paymentStatus} = req.query.formData;
    const studentId = req.studentId;
    const orderId =await generateOrderID();
    // console.log("review sop" + text)
    const newSOP = new RSOP({studentId:studentId, sop : sop, price : price, paymentStatus: paymentStatus, orderId: orderId, projectId: "NA", workStatus:"open"});

    await newSOP.
    save()
    .then(
        () => {console.log("added")
        res.send(orderId);
    }
    )
    .catch(
        err => {console.log("L lag gye tere");
        console.log(err);
        res.status(401).send("some error occured, Please try again later")}
    )
    res.end();
};

exports.getExtensiveSop = (req, res, next) =>{
    const text = req.body;
    console.log('extensive sop() called' + text);
    res.end();
};