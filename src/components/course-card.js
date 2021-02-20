import React from 'react'

import {Link} from 'react-router-dom';

const CourseCard = ({course}) =>
    <div>
        <img src="../images/node.png" className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">Course card has the basic information about this course</p>
            <Link to="/course/editor" className="btn btn-primary">
                {course.title}
            </Link>
            <i className="fas fa-trash"></i>
        </div>
    </div>

export default CourseCard