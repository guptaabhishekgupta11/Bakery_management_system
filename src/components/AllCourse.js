import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Course from './Course';
import Axios from 'axios';

const AllCourse = () => {
  const base_url = "http://localhost:8080"; // base_url

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = 'View all your Courses';
    getAllCourses(); 
  }, []);

  const getAllCourses = () => {
    Axios.get(`${base_url}/courses`)
      .then((response) => {
        // Success
        console.log(response);
        setCourses(response.data); // Update courses state with data from API
        toast.success("Courses fetched successfully");
      })
      .catch((error) => {
        // Error
        console.log(error);
        toast.error("Error fetching courses. Please try again later.");
      });
  };

  const UpdateCourse = (id) => {
    setCourses(courses.filter((c)=>c.id !==  id)); // Remove the course from list after updating it
    toast.info('Course updated successfully'); // Show a success message
  }

  return (
    <div>
      {courses.length > 0 ? (
        courses.map((course) => <Course key={course.id} course={course} update={UpdateCourse}  />)
      ) : (
        "No courses available"
      )}
    </div>
  );
}

export default AllCourse;
