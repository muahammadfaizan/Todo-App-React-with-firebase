import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebaseconfig';

const Login = () => {

  const emailVal = useRef();
  const passwordVal = useRef();
 
  const navigate = useNavigate();

  const LoginBtn = (event)=>{
    event.preventDefault();

    signInWithEmailAndPassword(auth, emailVal.current.value, passwordVal.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/todo")
    
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage);
     
  });
  }

  return (
    <>
      <h1 className='text-center mt-5'>Login</h1>

    <div className='d-flex justify-content-center align-item-center mt-4'>
     <form onSubmit={LoginBtn}>
     <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
     <Form.Label>Email</Form.Label>
     <Form.Control type="email" placeholder="name@example.com" ref={emailVal} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" placeholder="Enter Password" ref={passwordVal} />
      </Form.Group>
      
      <div className='text-center mt-3'>
       <span>Not a user?</span> <Link to={'/register'}>Sign Up</Link>
      </div>
     <div className='text-center mt-3'>
     <Button variant="outline-primary" type='submit'>Login</Button>
     </div>
     </form>

    </div>
    </>
  )
}

export default Login