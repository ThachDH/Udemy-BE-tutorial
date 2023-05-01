const express = require('express');

const router = express.Router();

//Khai báo route
router.get('/', (req, res) => {
    res.send('Hello World! Work hard in silient!')
})
router.get('/test', (req, res) => {
    res.send('<h1>22 Age </h1>');
})
router.get('/ejs', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;