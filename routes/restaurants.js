const express = require('express');

const router = express.Router();
const restController = require('../controllers/restaurants');
// const userValidator = require('../controllers/validation');

// define the home page route
router.get('/', restController.list);

// define the post route
router.post('/', restController.create);

module.exports = router;
