const express = require('express');
const {
    getHomepage,
    getTest,
    getEjs,
    postCreateUsers,
    getCreatePage,
} = require('../controllers/homeController')

const router = express.Router();

//Khai báo route
router.get('/', getHomepage);

router.get('/test', getTest)

router.get('/ejs', getEjs)
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUsers);

module.exports = router;