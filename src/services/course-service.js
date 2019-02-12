import courses from './courses.json'

let singleton = null

export default class CourseService {
    constructor() {
        if(!singleton){
            singleton = this
        }
        this.courses = courses;
    }

    addCourse = course => {
        const date = new Intl.DateTimeFormat('en-US',
            {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
            .format(Date.now());

        if(course === null) {
            course = {
                id: date,
                title: 'New Course'
            }
        }
        this.courses.push(course)
        return this.courses
    }

    findCourseById = courseId =>
        this.courses = this.courses.find(
            course => course.id === courseId
        )

    findAllCourses = () =>
        this.courses;

    deleteCourse = deleteCourse =>
        this.courses = this.courses.filter(
            course => course.id !== deleteCourse.id
        )

    findWidgetsByTopic = (topicId) => {
        let widgets = []
        for(let i = 0; i < this.courses[0].modules.length; i++)
            for(let j = 0; j < this.courses[0].modules[i].lessons.length; j++)
                for(let k = 0; k < this.courses[0].modules[i].lessons[j].topics.length; k++)
                        if(this.courses[0].modules[i].lessons[j].topics[k].id === topicId)
                            return this.courses[0].modules[i].lessons[j].topics[k].widgets
    }
}
