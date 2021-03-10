import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import {Link, Route} from 'react-router-dom';
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";


class CourseManager extends React.Component {
    state = {
        courses: []
    }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course: c)
            })))
    }

    componentDidMount = () =>
        findAllCourses().then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "today"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })
            ))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter(course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return(
            <div>
                <Link to="/">
                    <i className="fas fa-2x fa-home float-right"></i>
                </Link>
                <h2>Course Manager</h2>
                <button onClick={this.addCourse}>Add Course</button>
                <Route path="/courses/table" exact={true}>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid" exact={true}>
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                {/*<Route path={[*/}
                {/*    "/courses/editor/:courseId",*/}
                {/*    "/courses/editor/:courseId/:moduleId",*/}
                {/*    "/courses/editor/:courseId/:moduleId/:lessonId"]}*/}
                {/*       exact={true}*/}
                {/*       render={(props) => <CourseEditor {...props}/>}>*/}
                {/*</Route>*/}
            </div>
        )
    }
}

export default CourseManager



