
/*
NodeJS提供了domain模块，
可以简化异步代码的异常处理。在介绍该模块之前，我们需要首先理解“域”的概念。
简单的讲，一个域就是一个JS运行环境，在一个运行环境中，
如果一个异常没有被捕获，将作为一个全局异常被抛出。
NodeJS通过process对象提供了捕获全局异常的方法，示例代码如下:
*/

process.on('uncaughtException', function (err) {
    console.log('Error: %s', err.message);
});

setTimeout(function (fn) {
    fn();
});

//Error: fn is not a function