import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <div>
      <ListGroup>
        <Link className='list-group-item list-group-item-action' tag="a" to="/" >Home</Link>
        <Link  className='list-group-item list-group-item-action'tag="a" to="/view-Course" >View_Courses</Link>
        <Link className='list-group-item list-group-item-action' tag="a" to="/addCourse" >Add_Courses</Link>
        <Link className='list-group-item list-group-item-action' tag="a" to="/contact" >Contact</Link>
        <Link className='list-group-item list-group-item-action' tag="a" to="/about" >About</Link>
      </ListGroup>

    </div>
  )
}

export default Menu