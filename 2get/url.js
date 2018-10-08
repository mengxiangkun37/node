const url = require('url')
var url1 = "http://localhost:8080/aaa?f=1&ff=11";
var a = url.parse(url1,true);
console.log(a)