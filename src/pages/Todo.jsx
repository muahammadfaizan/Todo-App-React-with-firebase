import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useRef, useState } from 'react'
import { Button , Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { auth } from '../config/firebaseconfig'

const Todo = () => {
  
  const [todo , setTodo] = useState([]);
  const todoVal = useRef();

  const navigate = useNavigate()


  const userId = ()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        console.log(uid);
        
      } else {
        navigate('/login')
      }
    });
  }

  userId()

  const logout = async ()=>{
   await signOut(auth)
   .then(() => {
      console.log("Sign-out successful.");
      navigate('/login')
      
    }).catch((error) => {
      console.log(error);
      
    });
  }

  const addTodo = (event)=>{
    event.preventDefault();
    console.log(todoVal.current.value);
    
    if(!todoVal.current.value){
      alert("enter todo")
    }else{
      todo.push(todoVal.current.value)
      setTodo([...todo])
      console.log(todo);

    }

    todoVal.current.value = ""
  }
  

  const deleteBtn = (index)=>{
    console.log("delete button")
    todo.splice(index , 1);
    setTodo([...todo]);
  }

  const editBtn = (index)=>{
    console.log("edit button");
    const updateVal = prompt("Enter update todo")
    todo.splice(index , 1 , updateVal);
    setTodo([...todo])
  }
  
  return (
    <>
    <h1 className='text-center mt-3'> Todo App</h1>
    
    <form onSubmit={addTodo} className='d-flex justify-content-center align-item-center mt-5' >
    
    <Form.Group className="w-50" controlId="exampleForm.ControlInput1">
     <Form.Control className="form-control-lg rounded-3" type="text" placeholder="Enter Todo" ref={todoVal} />
      </Form.Group>
      
       <Button variant="outline-primary" type='submit' className='mx-2'>Add</Button> 
    </form>

    <div className='d-flex justify-content-center align-item-center mt-4'>
      <ul>
        {todo.map((item , index)=>{
          return(
            <div key={index}>
              <li className='fs-3'>{item}</li>
              
              <li className="mt-1 fs-4">{item}
          
          <i className="fa-solid fa-pen-to-square mx-2 btn btn-info" onClick={()=> editBtn(index)}></i>
          <i className="fa-solid fa-delete-left btn btn-warning"  onClick={()=> deleteBtn(index)}></i>
          </li>
            </div>
          )
        })}
      </ul>
    </div>
     
    <div className='text-center mt-3'>
     <Button variant="outline-primary" onClick={logout}>Logout</Button>
     </div>
     
    </>
  )
}

export default Todo