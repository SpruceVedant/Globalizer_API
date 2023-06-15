const express = require('express');

const router = express.Router();

exports.getPrivacy = (req, res, next) =>{
    console.log('calling get Privacy');
    res.send('got it');
    res.end();
}

exports.getTermsC = (req, res, next) => {
    console.log('calling terms and conditions');
    res.send('got it');
    res.end();
}