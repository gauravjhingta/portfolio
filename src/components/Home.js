import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Top from './Top'
import Hobbies from './Hobbies'
import top_css from './Top.css'
import Skills from './Skills'
import {motion,useScroll} from "framer-motion"
const Home = () => {
  return (
    <Fragment>
      <Navbar/>
      <Top/>
      <Hobbies/>
      <Skills/>
      
    </Fragment>
  )
}

export default Home