
const connection = require('../config/database');

const getHomepage = (req, res) => {
  console.log('he')
  let users = [];
  // process data
  // call model
  // simple query
  connection.query(
    'select*from Users u',
    function (err, results, fields) {
      users = results;
      console.log('results', results); // results contains rows returned by server
      res.send(JSON.stringify(users));

    }
  );
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
