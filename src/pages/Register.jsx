
import { useRef } from 'react'
import { Button , Form } from 'react-bootstrap'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebaseconfig'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  
  const userNameVal = useRef()
  const emailVal = useRef()
  const passwordVal = useRef()
  const navigate = useNavigate()

  const RegisterBtn = (event)=>{
    event.preventDefault();

    createUserWithEmailAndPassword(auth, emailVal.current.value, passwordVal.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      navigate('/login')
      
    })
    .catch((error) => {
     
      const errorMessage = error.message;
      console.log(errorMessage);    
    });
  
    userNameVal.current.value = "" ;
    emailVal.current.value = "" ;
    passwordVal.current.value = "" ; 

  }


  return (
    <>
    <h1 className='text-center mt-5'>Register</h1>

  <div className='d-flex justify-content-center align-item-center mt-4'>
   <form onSubmit={RegisterBtn}>
   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>Username</Form.Label>
   <Form.Control type="text" placeholder="Enter Your Name" ref={userNameVal} />
    </Form.Group>
    

   <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
   <Form.Label>Email</Form.Label>
   <Form.Control type="email" placeholder="name@example.com" ref={emailVal} />
   
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" placeholder="Enter Password" ref={passwordVal} />
    </Form.Group>
    <div className='text-center mt-3'>
    <Button variant="outline-primary" type='submit' >Register</Button>
    </div>
   </form>

  </div>
  </>
  )
}

export default Register