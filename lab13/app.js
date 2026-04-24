const http = require('http');
const os = require('os');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  res.write('<h1>Node.js сервер працює!</h1>');
  res.write(`<p>Моя операційна система: ${os.type()} ${os.release()}</p>`);
  res.write(`<p>Вільна пам'ять: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB</p>`);
  
  res.end('<footer>Виконав Коннік Данило Павлович у межах практичної роботи</footer>');
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущено за адресою http://${hostname}:${port}/`);
});