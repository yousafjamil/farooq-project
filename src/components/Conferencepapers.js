import React from 'react'

const Conferencepapers = ({ conference}) => {

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 '>
                    <div className='d-flex'>
                        <span className='papers '>Conference papers </span>
                        <span className='search-green' ><i >{conference}</i></span>
                    </div>

                </div>
            </div>
          
      
        </div>
    )
}

export default Conferencepapers