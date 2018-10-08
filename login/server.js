const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urla = require('url');

var users = {};
var server = http.createServer(function (req, res) {
    var str = '';
    req.on('data', function (data) {
        str = str + data;
    })
    req.on('end', function () {
        var obj = urla.parse(req.url, true);
        var url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);
        var file_name = './../www' +url;
        console.log(url,GET)
        if (url == '/user') {
            switch (GET.act) {
                case 'reg':
                    if (users[GET.user]) {
                        res.write('{"ok":false,"msg":"用户名已经存在"}');
                        console.log(1111)
                        console.log(url,GET.act)
                        res.end();
                    } else {
                        users[GET.user] = GET.pass;
                        res.write('{"ok":true,"msg":"注册成功"}');
                        console.log(111)
                        console.log(url,GET.act)
                        res.end();
                    }
                    break;
                case 'login':
                    if (users[GET.user] == null) {
                        res.write('{"ok":false,"msg":"用户不存在"}');
                    }else if(users[GET.user]!= GET.pass){
                        res.write('{"ok":false,"msg":"密码错误"}');
                    }else{
                        res.write('{"ok":true,"msg":"登陆成功"}');
                    }
                    break;
                default:
                    res.write('{"ok":false,"msg":"错误"}');
                    res.end();
            }
        } else {
            fs.readFile(file_name, function (err, data) {
                if (err) {
                    res.write('404');
                } else {
                    res.write(data);
                }
                res.end();
            })
        }
    })
})
server.listen(8080);