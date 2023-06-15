const express = require('express');

const docController = require('../controllers/docController')

const router = express.Router();

router.get('/privacy-policy', docController.getPrivacy);

router.get('/terms-and-conditions', docController.getTermsC);

module.exports = router;