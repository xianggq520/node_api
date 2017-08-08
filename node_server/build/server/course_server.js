"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var course_1 = require("../classes/course");
var app = express();
app.get('/', function (request, response) { return response.send("请求课程首页了..."); });
app.get('/courses', function (request, response) {
    console.log('请求课程列表了...');
    response.json(course_1.Course.getCourses());
});
app.get('/course/:id', function (request, response) {
    console.log('请求单个课程资源了...');
    response.json(course_1.Course.getCourses());
});
var server = app.listen(80, 'localhost', function () {
    console.log("服务器已经启动，地址是http://localhost:8080");
});
