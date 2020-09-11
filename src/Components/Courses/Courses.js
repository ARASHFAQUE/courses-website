import React from 'react';
import './Courses.css'

const Courses = ( props ) => {
    const {name, price, instructor} = props.course;
    return (
        <div className="all-courses">
            <div className="single-courses">
                <div className="course-detail">
                    <h4>{name}</h4>
                    <h3>Price ${price}</h3>
                    <p>Instructor: {instructor}</p>
                </div>
                <button onClick={() => props.handleAddCourse(props.course)} className="enroll-button">Enroll Now</button>
            </div>
        </div>
    );
};

export default Courses;