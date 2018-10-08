const querystring = require('querystring');
var url = "http://localhost:8080/aaa?f=1&ff=11";
var a = querystring.parse(url);
console.log(a)