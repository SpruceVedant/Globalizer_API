const Token = require("../models/token");
const student = require('../models/StudentProfile');

//verifies token on each request, stuDetailsRoute for clarity
//after successful verfication provides the user_id in User Schema 
exports.verifyToken = async (req, res, next) => {
    const token = req.body.token;
    const tokenExists = await Token.findOne({token:token});
    console.log("token..............."+ tokenExists)
    if(!tokenExists)
        res.status(401).send("Invalid authentication")
    else{
        console.log(tokenExists.userId + " in verifyToken")
        req.userId = tokenExists.userId;
        next();
    }   
}

//verifies token on get Requests
//after successful verfication provides the user_id in User Schema 
exports.getverifyToken = async (req, res, next) => {
    const token = req.query.token;
    const tokenExists = await Token.findOne({token:token});
    console.log("token..............."+ tokenExists)
    if(!tokenExists)
        res.status(401).send("Invalid authentication")
    else{
        console.log(tokenExists.userId + " in verifyToken")
        req.userId = tokenExists.userId;
        next();
    }   
}

exports.RemoveToken = async (req, res, next) =>{
    console.log("api called")
    const token = req.body.token;
    console.log(token);
    if(token!=undefined)
        await Token.deleteOne({token:`${token}`})
        .then(response => {console.log("Removed")
            res.send("Logged Out Successfully")})
        .catch(err => {
            console.log(err)
            res.send(err)})
    else
    res.status(401).send("invalid token")
}

exports.getStudentId = async (req, res, next)=>{
    const userId = req.userId;
    const studentExists = await student.findOne({userId:userId});
    console.log("token..............."+ studentExists)
    if(!studentExists)
        res.status(401).send("Invalid authentication")
    else{
        console.log(studentExists._id + " in verifyToken")
        req.studentId = studentExists._id;
        next();
    }
}