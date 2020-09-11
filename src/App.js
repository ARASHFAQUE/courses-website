import React, { useEffect, useState } from 'react';
import './App.css';
import {fakeData} from './fakeData/fakeData.js';
import Courses from './Components/Courses/Courses';
import Price from './Components/Price/Price';

function App() {
  useEffect( () => {
    setCourses(fakeData);
  }, [])
  const [courses, setCourses] = useState([]);
   const [cart, setCart] = useState([]);;

  const handleAddCourse = ( course ) => {
    const newCourse = [...cart, course];
    setCart(newCourse);
}


  return (
    
    <div className="container">
        <div className="course-container">
          {
            courses.map(course => <Courses 
              course={course}
              handleAddCourse={handleAddCourse}
              >
              </Courses>)
          }
        </div>
        <div className="price-container">
          <Price cart={cart}></Price>
        </div>   
    </div>
  );
}

export default App;
