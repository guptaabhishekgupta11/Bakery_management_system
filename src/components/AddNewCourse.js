import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Button, Label, Input, Container } from 'reactstrap';
import styles from './AddNewCourse.module.css';

import axios from "axios";
import {  toast } from 'react-toastify';

const AddNewCourse = () => {
  const base_url = "http://localhost:8080"; // base_url
  const [courseList, setCourseList] = useState({});

  useEffect(() => {
    document.title = 'Add New Course';
  }, []);

  const handleFormSubmit = (e) => {
    postData(courseList);
    e.preventDefault();
    // Perform any action with the form data, like submitting to a server
    
    console.log(courseList);
  };

  //function to post data to server
  const postData=()=>{
    axios.post(`${base_url}/courses`,courseList).then((response)=>{
      console.log(response);
      toast.success("Course Added Successfully");
    },(error)=>{
      console.log(error);
      toast.error("Error adding course. Please try again later");
    })
  }


  return (
    <Form onSubmit={handleFormSubmit} className={styles.container}>
  <h1 className={styles.title}>Add Your Course Details Here</h1>
  <FormGroup>
    <Label htmlFor='courseId' className={styles.label}>Course ID</Label>
    <Input type='text' placeholder='Enter Course ID Here' id='courseId' name='courseId' className={styles.inputField}
      onChange={(e) => setCourseList({ ...courseList, id: e.target.value })}
    />
  </FormGroup>
  <FormGroup>
    <Label htmlFor='title' className={styles.label}>Title</Label>
    <Input type='text' placeholder='Enter Course Title Here' id='title' name='title' className={styles.inputField}
      onChange={(e) => setCourseList({ ...courseList, title: e.target.value })}
    />
  </FormGroup>
  <FormGroup>
    <Label htmlFor='description' className={styles.label}>Description</Label>
    <Input type='textarea' placeholder='Enter Description Here' id='description' name='description' className={styles.inputField}
      onChange={(e) => setCourseList({ ...courseList, description: e.target.value })}
    />
  </FormGroup>
  <Container className='text-center'>
    <Button type='submit' color='primary' style={{ marginRight: '5px' }} className={styles.primaryButton}>Submit</Button>
    <Button type='reset' color='danger' style={{ marginLeft: '5px' }} className={styles.dangerButton}>Reset</Button>
  </Container>
</Form>

  );
}

export default AddNewCourse;
