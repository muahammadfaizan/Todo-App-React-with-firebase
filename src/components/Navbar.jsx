import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-primary text-white">
      <Container fluid>
        <Navbar.Brand href="Login" >Todo App</Navbar.Brand>
        
      
        <Col xs="auto">
            <Button variant="outline-dark text-white" href='login' className='mx-2'>Sign In</Button>
            <Button variant="outline-dark text-white" href='register'>Sign Up</Button>
          </Col>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;