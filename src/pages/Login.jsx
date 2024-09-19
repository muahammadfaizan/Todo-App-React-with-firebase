import React from 'react'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <h1 className='text-center mt-5'>Login</h1>

    <div className='d-flex justify-content-center align-item-center mt-4'>
     <form className=''>
     <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
     <Form.Label>Email</Form.Label>
     <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      <Button variant="outline-primary">Search</Button>
     </form>

    </div>
    </>
  )
}

export default Login