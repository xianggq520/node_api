"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (request, response) { return response.send("请求课程首页了..."); });
app.get('/course', function (request, response) { return response.send('请求课程列表了...'); });
var server = app.listen(8080, 'localhost', function () {
    console.log("服务器已经启动，地址是http://localhost:8080");
});
