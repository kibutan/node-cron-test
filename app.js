const http = require("http");
var cron = require("node-cron");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

cron.schedule("* * * * *", () => {
  let day = new Date();
  console.log("running a task every minute at", day);
});
