const http =require('http');
// const querystring = require('querystring');
const urlA = require('url');
var server = http.createServer(function(req,res){
    var get = {};
    if(req.url.indexOf("?")!=-1){
        // var arr = req.url.split('?');
        // var url = arr[0];
        // get = querystring.parse(arr[1]);
        var data = urlA.parse(req.url,true);
        url = data.pathname;
        get = data.query;
    }else{
        var url = req.url;
    }
    console.log(url , get);
    res.write('aaa');
    res.end()
})
server.listen(8080);