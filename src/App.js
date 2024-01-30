import React from "react";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Home from "./components/Home"; // Import the Home component
import AllCourse from "./components/AllCourse";
import AddNewCourse from "./components/AddNewCourse";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={5}>
              <Menu />
            </Col>
            <Col md={7}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/view-Course" element={<AllCourse />} />
                <Route path="/addCourse" element={<AddNewCourse />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
