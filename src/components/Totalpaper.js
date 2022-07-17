import React from 'react'

const Totalpaper = ({ totalpaper }) => {
  return (
    <div className='container'>
      <div className='row '>
        <div className='col-lg-12   '>
          <div className='d-flex'>
            <span className=' papers'>Total papers </span>
            <span className='search-danger'><i >{totalpaper}</i></span>
          </div>
        </div>
      </div>
      <br />


    </div>

  )
}

export default Totalpaper