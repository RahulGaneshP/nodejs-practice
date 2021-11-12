var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true).query;
  var txt = q.id+ " " + q.name+ " "+q.salary;
  res.end(txt);
}).listen(8080);