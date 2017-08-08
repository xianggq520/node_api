//D:\PROJECTS\PRO-DEMO\node_api\demo\try_catch.js
try {
    var async = function(fn, callback) {
        // Code execution path breaks here.
        setTimeout(function () {
            callback(fn());
        }, 0);
    }

    async(null, function (data) {
        // Do something.
    });
} catch (err) {
    console.log('Error: %s', err.message);
}

/*异步调用打断函数调用路径，异常无法正确捕获*/
    /*callback(fn());
    TypeError: fn is not a function
    at Timeout._onTimeout (D:\PROJECTS\PRO-DEMO\node_api\api\try_catch.js:7:22)
    at ontimeout (timers.js:365:14)
    at tryOnTimeout (timers.js:237:5)
    at Timer.listOnTimeout (timers.js:207:5)*/