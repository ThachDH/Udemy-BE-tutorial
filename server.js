const http = require('http');//Thư viện này chạy được do nó có sẵn trong nodejs


const hostname = '127.0.0.1'; // =local host : bằng tại vì đây là quy định của máy tính chúng ta,
// có thể thay đổi 1 từ 1-255 liên quan kiến thức mạng máy tính 
const port = 3003; // Nơi chạy project -- có thể thay đổi port từ 0 đến 65355 và né 1 số loại port phổ biến

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n Chao Ho Duc Thach');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
