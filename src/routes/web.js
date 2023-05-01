const express = require('express');
const {
    getHomepage,
    getTest,
    getEjs
} = require('../controllers/homeController')

const router = express.Router();

//Khai báo route
router.get('/', getHomepage);

router.get('/test', getTest)

router.get('/ejs', getEjs)

module.exports = router;