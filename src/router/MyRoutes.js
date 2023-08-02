import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from '../components/Home'
import HireMe from '../components/HireMe'

const MyRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/hireme" element={HireMe }/>
      {/* <Route path="/projects" element={projects} /> */}
      {/* Add more routes as needed */}
    </Routes>
  )
}

export default MyRoutes