import React from 'react'
import {Card, CardBody,CardSubtitle,CardText, CardTitle, Button,Container} from "reactstrap"
import axios from "axios"
import {toast} from "react-toastify"
const Course = ({course,update}) => {
  const base_url = "http://localhost:8080"; // base_url
  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then((response)=>{
      console.log(response);
      
      update(id);
      
      toast.success("Course deleted successfully");
      // window.location='/';
    }).catch((error)=>{
      console.log(error);
      toast.error("Error deleting course. Please try again later");
    })
  }
  return (
    <Card>
      <CardBody className='text-center'>
        <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container>
        <Button color='primary' style={{ marginRight: '5px' }} className='mr-2'>Update</Button>
          <Button onClick={()=>{
            deleteCourse(course.id)
          }} className='bg-danger lr-2'>Delete</Button>
        </Container>
      </CardBody>
    </Card>
  )
}

export default Course