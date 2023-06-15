const express = require('express');

const router = express.Router();

const query = require('../controllers/queryController')

router.post('/new', query.postNewQuery);

module.exports = router;