import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container-fluid'>
<div className='row'>
  <div className='col-lg-12 col-sm-6'>
  <ul className=''>
            <Link to='/'> <li>Home</li></Link>
            <Link to='/titles'> <li>Papers Title</li></Link>
            
            <li>About</li>
            
        </ul>

 
  </div>
</div>
       
    </div>
  )
}

export default Footer