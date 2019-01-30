import courses from './courses.json'

export default class CourseService {
  constructor() {
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
}
