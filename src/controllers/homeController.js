
const connection = require('../config/database');
const {getAllUsers} = require('../services/CRUDService');


const getHomepage = async (req, res) => {
  let results = await  getAllUsers();// cái hàm getAllUsers là hàm bất đồng bộ
                                    // vậy nếu không có await thì results = {};
  return res.render('home.ejs', { listUsers: results })
}

const getTest = (req, res) => {
  res.send('<h1>22 Age </h1>');
}

const getEjs = (req, res) => {
  res.render('sample.ejs')
}

const postCreateUsers = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  const [results, fields] = await connection.query(`INSERT INTO Users(email, name, city)
  VALUES (?, ?, ?)`, [email, name, city])
  res.send('Created user succeed!!')
}//   Ở đây, vế bên phải (await connection.execute('SELECT * FROM `table`)) trả ra 1 array gồm 2
// phần tử, vì vậy, việc viết:
// const [rows, fields] có nghĩa là: rows là phần tử đầu tiên, fields là phần tử thứ 2 của array kết
// quả.



const getCreatePage = (req, res) => {
  res.render('create.ejs')
}

module.exports = {
  getHomepage,
  getTest,
  getEjs,
  postCreateUsers,
  getCreatePage,
}
