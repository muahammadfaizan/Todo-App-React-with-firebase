import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Todo from './pages/Todo.jsx';
import Notfound from './pages/Notfound.jsx';

const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <Layout />,
      children : [
        {
          path : "login",
          element : <Login />
        },
        {
          path : "register",
          element : <Register /> 
        },
        {
          path : "login",
          element : <Todo />
        },
        {
          path : "*",
          element : <Notfound />
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Layout />
  </RouterProvider>
)