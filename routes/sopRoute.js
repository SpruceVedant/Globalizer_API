const express = require('express');
const router = express.Router(); 

const SOPcontroller = require('../controllers/SOPcontroller');
const verifyToken = require('../controllers/verifyToken');

// router.get('/sop', SOPcontroller.getSop);

router.get('/review',verifyToken.getverifyToken,verifyToken.getStudentId, SOPcontroller.getReviewSop);

router.post('/extensive', SOPcontroller.getExtensiveSop);

module.exports = router;