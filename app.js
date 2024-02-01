// const fs = require("fs");
// fs.writeFileSync("test.txt", "It is working");

// var path = require("path");
// var p = "/Users/savithamanoharan/Nodejs/pratice/test.text";
// console.log(path.dirname(p));
// console.log(path.basename(p));
// console.log(path.extname(p));
// console.log(path.isAbsolute(p));

// var buf1 = Buffer.from('1234567');
// var buf2 = Buffer.from('HELLO');
// buf2.copy(buf1, 2);
// console.log(buf1.toString());
// console.log(Buffer.concat([buf1, buf2]).toString());
// console.log(buf1.equals(buf2));
// console.log(Buffer.compare(buf1, buf2));

// var http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "content-type": "text/plain" });
//     res.write("Welcome to the world of happiness!");
//     res.end();
//   })
//   .listen(8080);

// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2019&month=february';
// var q = url.parse(adr, true);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// var util = require('util');
// var txt = 'Congratulate %s on his %dth birthday';
// var result = util.format(txt, 'Arjun', 13);
// console.log(result);

// var os = require("os");
// console.log("Platform:" + os.platform());
// console.log("Architecture:" + os.arch());

// var date = require("./date.js");
// console.log("The date and time are currently: " + date());

var chalk = require("chalk");
console.log(
  chalk.yellow(
    "I am a yellow line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes yellow again!"
  )
);
