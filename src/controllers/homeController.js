
const connection = require('../config/database');

const getHomepage = (req, res) => {
  return res.render('home.ejs')
}

const getTest = (req, res) => {
  res.send('<h1>22 Age </h1>');
}

const getEjs = (req, res) => {
  res.render('sample.ejs')
}
module.exports = {
  getHomepage,
  getTest,
  getEjs,
}
