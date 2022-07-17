import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Journalpaper = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate('/')
  }
  // var alldata=[]
  // if(state.journal && state.title){
  //   alldata.push([
  //     state.journal,state.title
  //   ])
  // }
  // console.log(alldata)
  return (
    <div className='container mt-3'>
      <div className='row'>
        {state.journal.map((paper, index) => {
          // console.log(paper)
          return <div className='col-lg-8 offset-lg-2 ' key={index}>



{state.title.map((t, secondIndex) => {
                  console.log(t)
                  
                 return <>
                 {index == secondIndex ? 
                      <>  
                    <div className="card mb-2 " >
              <div className="card-header">Paper No {index + 1} </div>
              <div className="card-body">
                
              <a href={paper} target="_blank"><h5>{t}</h5>
                    </a>
                
              </div>
            </div>
            {/* <button className='btn btn-info mb-2' onClick={handleGoBack} >Go Back</button> */}

                   </>
                   :  <></>
                  }</> 
                 
                })}




          </div>
        })}
      </div>
    </div>
  )
}

export default Journalpaper