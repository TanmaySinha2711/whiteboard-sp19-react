import CourseService from './course-service'

let _singleton = Symbol();

const TOPIC_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic/TID/widget';
const WIDGET_DELETE_API_URL=
    'http://localhost:8080/api/widget/WID';

class WidgetService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate another instance');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new WidgetService(_singleton);
        return this[_singleton]
    }

    findAllWidgets = () =>{
        let cs = new CourseService()
        let courses = cs.findAllCourses()
        return courses.module.lessons.topics.widgets
    }


    createWidget(topicId, widget) {
        return fetch(TOPIC_API_URL.replace('TID', topicId),
            {   body: JSON.stringify(widget),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    findAllWidgetsForTopic(courseId, moduleId, lessonId, topicId) {
        return fetch(
            TOPIC_API_URL
                .replace('CID', courseId)
                .replace('MID', moduleId)
                .replace('LID', lessonId)
                .replace('TID', topicId))
            .then(function (response) {
                return response.json();
            })
    }


    deleteLesson(widgetId) {
        return fetch(WIDGET_DELETE_API_URL.replace
        ('WID', widgetId), {
            method: 'delete'
        })
    }


}
export default WidgetService;
