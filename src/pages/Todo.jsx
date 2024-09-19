import React, { useRef } from 'react'
import { Button , Form } from 'react-bootstrap'

const Todo = () => {
  
  const todoVal = useRef()
 
  
  return (
    <>
    <h1 className='text-center mt-3'> Todo App</h1>
    
    <form>
    <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
     <Form.Control type="text" placeholder="Enter Todo" ref={todoVal} />
      </Form.Group>
      <Button variant="outline-primary" type='submit' >Add Todo</Button>

    </form>
    </>
  )
}

export default Todo