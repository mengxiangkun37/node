const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlp = require('url');

var server = http.createServer(function (req, res) {
    // get
    var GET = {};
    var data = urlp.parse(req.url, true);
    var url = data.pathname;
    GET = data.query;

    //post
    var str = '';
    var POST = {};
    req.on('data', function (data) {
        str = str + data;
    })
    req.on('end', function () {
        POST = querystring.parse(str);


        console.log(url, GET, POST);
    })


    
    var file_name = './../www' + url;
    fs.readFile(file_name, function (err, data) {
        if (err) {
            res.write('404');
        } else {
            res.write(data);
        }
        res.end();
    })



})
server.listen(8080);