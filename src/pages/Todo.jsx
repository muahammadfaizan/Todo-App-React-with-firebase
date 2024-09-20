import React, { useRef, useState } from 'react'
import { Button , Form } from 'react-bootstrap'

const Todo = () => {
  
  const todoVal = useRef()
  const [todo , setTodo] = useState([])

  const addTodo = (event)=>{
    event.preventDefault();
    
    console.log(todoVal.current.value);
    
  }

  
  return (
    <>
    <h1 className='text-center mt-3'> Todo App</h1>
    
    <form onSubmit={addTodo} className='d-flex justify-content-center align-item-center mt-5' >
    
    <Form.Group className="w-50 h-50" controlId="exampleForm.ControlInput1">
     <Form.Control type="text" placeholder="Enter Todo" ref={todoVal} />
      </Form.Group>
      
       <Button variant="outline-primary" type='submit' className='mx-2'>Add</Button> 
    </form>
    </>
  )
}

export default Todo