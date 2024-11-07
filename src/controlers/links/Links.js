import React from 'react'
import "./links.css"
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div className='Links'>
        <div className='linksss'>
        <Link to='/#' >Home</Link>
        <Link to='employeelist' >Employee List</Link>
        </div>
        
    </div>
  )
}

export default Links
