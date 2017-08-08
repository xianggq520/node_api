export class Course {
    constructor(public id: number, public name: string, public desc: string, public categories: Array<string>) {

    }

    static getCourses(): Array<Course> {
        return courses;
    }

    static addCourse(course: Course):void {
        courses.push(course);
    }

    static getCourseById(id:number):Course{
        return courses.find((course)=>{
            return course.id == id;
        })
    }
}

const courses: Course[] = [
    new Course(1, "课程一", "课程一描述", ["分类一", "分类二"]),
    new Course(2, "课程二", "课程二描述", ["分类一", "分类二", "分类三"]),
    new Course(3, "课程三", "课程三描述", ["分类一"]),
    new Course(4, "课程四", "课程四描述", ["分类一", "分类三"]),
    new Course(5, "课程五", "课程五描述", ["分类二", "分类二"]),
    new Course(6, "课程六", "课程六描述", ["分类二", "分类四"]),
    new Course(7, "课程七", "课程七描述", ["分类一", "分类四"])
];