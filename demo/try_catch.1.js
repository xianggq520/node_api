/*因为代码执行路径被打断了，我们就需要在异常冒泡到断点之前用try语句把异常捕获住，并通过回调函数传递被捕获的异常。*/
//D:\PROJECTS\PRO-DEMO\node_api\demo\try_catch.1.js
function async(fn, callback) {
    // Code execution path breaks here.
    setTimeout(function ()　{
        /*异常冒泡前捕获异常*/
        try {
            callback(null, fn());
        } catch (err) {
            callback(err);
        }
    }, 0);
}

async(null, function (err, data) {
    if (err) {
        console.log('Error: %s', err.message);
    } else {
        // Do something.
    }
});


/*
-- Console ------------------------------
Error: object is not a function*/