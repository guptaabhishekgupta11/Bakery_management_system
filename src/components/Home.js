import React,{useEffect} from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {

  useEffect(() => {
    document.title = 'Home';
  })

  return (
    <div className="text-white py-5" style={{
      background: 'rgb(1, 11, 60)',
      backgroundImage: 'linear-gradient(90deg, rgba(1, 11, 60, 1) 0%, rgba(22, 97, 141, 1) 100%)'
    }}>
      <Container className='text-center'>
        <h1>Welcome to the Project</h1>
        <p>This is developed for practice purposes only using React JS and Java.</p>
        <Button variant="success" outline>Start using</Button>
      </Container>
    </div>
  );
}

export default Home;
