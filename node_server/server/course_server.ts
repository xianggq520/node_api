import * as express from 'express';
import {Course} from "../classes/course";

const app = express();

app.get('/', (request, response) => response.send("请求课程首页了..."));

app.get('/courses', (request, response) => {
    console.log('请求课程列表了...');
    response.json(Course.getCourses());
});

app.get('/course/:id', (request, response) => {
    console.log('请求单个课程资源了...');
    response.json(Course.getCourses());
});

const server = app.listen(80, 'localhost', () => {
    console.log("服务器已经启动，地址是http://localhost:8080");
});