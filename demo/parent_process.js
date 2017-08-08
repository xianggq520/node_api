var child_process = require('child_process');

var child = child_process.spawn('node', ['child_process2.js'], {
    stdio: [0, 1, 2, 'ipc']
});

child.on('message', function (msg) {
    console.log(msg);
});

child.on('close', function (code) {
    console.log('child process closeed with code ' + code);
});

child.on('exit', function (code) {
    console.log('child process exited with code ' + code);
})

child.send({ hello: 'hello' });