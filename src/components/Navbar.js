import React from 'react'
import { Link } from 'react-router-dom'
import smalllogo from './smallLogo.png'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
<Link to='/' >
<img  src={smalllogo} className='navbar-logo'  alt=''/>

</Link>
{/* <h3 className='navbar-title'>Research Publication Reporting System</h3> */}
        </nav>
{/* <nav class="navbar navbar-expand-lg navbar-light navbar-bg">
  <a class="navbar-brand" href="/"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/title">Link</a>
      </li>
    
    </ul>
  
  </div>
</nav> */}


    </div>
  )
}

export default Navbar