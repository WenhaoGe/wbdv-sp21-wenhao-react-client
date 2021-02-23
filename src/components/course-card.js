import React from 'react'

import {Link} from 'react-router-dom';

const CourseCard = ({deleteCourse, course}) =>
    <div className="col-4">

    <div className="card">

        <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>

        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">Course card has the basic information about this course</p>
            <img src={``}/>
            <Link to="/courses/editor" className="btn btn-primary">
                {course.title}
            </Link>
            <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
        </div>
    </div>
    </div>

export default CourseCard
