const fs = require('fs');
//readFile(文件名，回调函数)异步
fs.readFile('aaa.txt',function(err,data){
    // console.log(err);
    if(err){
        console.log('shibai')
    }else{
        console.log(data.toString());
    }
});
//writeFile("文件名"，内容，回调)
fs.writeFile('bbb.txt','fssfsad',function(err,data){
    console.log(err)
})