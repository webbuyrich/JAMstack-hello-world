import React from "react"
import { Link }  from "gatsby"
import Header from "../components/header-about"

export default () => (
  <div style={{ color: 'teal', padding: '10px' }}>
  	<Link to="/">Home</Link>
  	<Header headerText="Contact"/>  
  	
    <p>Such wow. Very React.</p>
  </div>
)