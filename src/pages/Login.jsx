import React from 'react'
import Button from 'react-bootstrap/Button';

const Login = () => {
  return (
    <>
    <div className='text-center mt-5'>
      <h1>Login</h1>

     <form className='form-control '>
      <input type="email" placeholder="Enter your Email"  />
      <br /><br />
      <input type="password" placeholder="Enter your Password"  />
      <br /><br />
      <Button variant="outline-success" >Search</Button>
     </form>

    </div>
    </>
  )
}

export default Login