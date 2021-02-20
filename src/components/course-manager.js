import React from 'react'

import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Link, Route} from 'react-router-dom';
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";


class CourseManager extends React.Component {
    state = {
        courses: [],
        qwe: 123,
        sdf:456
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
    }

    render() {
        return(
            <div>
                <Link to="/">
                    <i className="fas fa-2x fa-home float-right"></i>
                </Link>
                <h2>Course Manager</h2>
                <button onClick={this.addCourse}>Add Course</button>
                <Route path="/courses/table">

                </Route>
            </div>
        )
    }
}



