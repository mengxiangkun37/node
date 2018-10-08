const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
    // console.log('hrell');
    // switch(req.url){
    //     case '/1.html':
    //     res.write('111');
    //     break;
    //     default:
    //     res.write('404');
    // }
    var file_name = './www'+req.url;
    fs.readFile(file_name,function(err,data){
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    })
});

server.listen(8080);