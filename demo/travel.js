/*遍历目录*/


var fs = require('fs');

var path = require('path');

function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}
 
travel('../../node_api2', function (pathname) {
    console.log(pathname);
});

travel('C:/Users/mobo/tmp', function (pathname) {
    console.log(pathname);
});
//http://item.btime.com/32qsp811ilm94l9vkvr0rp7jgbd?from=ssk2