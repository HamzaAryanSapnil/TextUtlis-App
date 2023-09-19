import React from 'react'

import TextForm from './TextForm'


const Home = (props) => {
  return (
  <>
   

  <TextForm heading = "Enter Your Text to analyze" mode = {props.mode} showAlert = {props.showAlert}/>
 
  </>
  )
}

export default Home
