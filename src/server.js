
//nodejs
// const http = require('http');//Thư viện này chạy được do nó có sẵn trong nodejs
// const hostname = '127.0.0.1'; // =local host : bằng tại vì đây là quy định của máy tính chúng ta,
// // có thể thay đổi 1 từ 1-255 liên quan kiến thức mạng máy tính 
// const port = 3003; // Nơi chạy project -- có thể thay đổi port từ 0 đến 65355 và né 1 số loại port phổ biến

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n Chao Ho Duc Thach');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



//express js, import
const express = require('express')
const path = require('path');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const websRoute = require('./routes/web');
const mysql = require('mysql2');





// console.log('>>>> check env: ', process.env)

const app = express() // app expresss
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine,static files
configViewEngine(app);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

//test connection
//create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //default : 3306
    user: 'root',
    password: '123456',
    database: 'sa'
});
// simple query
connection.query(
    'select*from Users u',
    function (err, results, fields) {
        console.log('results', results); // results contains rows returned by server
        console.log('fields', fields); // fields contains extra meta data about results, if available
    }
);


// Khai báo route 
app.use('/', websRoute);