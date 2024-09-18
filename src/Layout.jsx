import React from 'react'
// import { Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

import NavScrollExample from './components/Navbar'

const Layout = () => {
  return (
    <>
    <NavScrollExample />
    <Outlet/>
    </>
  )
}

export default Layout