import React from 'react'

const Journalpapers = ({journal}) => {
  
  return (
    <div>
         <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 '>
                    <div className='d-flex'>  
                    <span className=' papers'>Journals papers </span>
                    <span className='search-yellow ' ><i >{journal}</i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Journalpapers