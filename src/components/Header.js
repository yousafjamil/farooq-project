import React from 'react'
import second from './logo.png'
const Header = () => {
  return (
    <div className='container-fluid d-flex justify-content-center '>
        <div className='row '>
        <div className='col-lg-12  mt-5'>
      <span className='logo'>
        <img  src={second} className='logo mx-auto d-block' alt='' />
      </span>
      <h3 className='text-center  mt-2 ml-1'>
            <font className='app-title' color="#0F52BA" >Research</font>
            <font className='app-title text-danger'  >Publication</font>
            <font className='app-title text-warning'  >Reporting</font>
            <font className='app-title text-success'   >System</font>   
      </h3>
 
    
     
    </div>
        </div>
    </div>
  )
}

export default Header