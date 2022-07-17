import React from 'react'
// import second from './logo.png'
import axios from 'axios'
import Titles from './Titles'
// import { Link} from 'react-router-dom'
import Header from './Header'
import Loading from './Loading'


const Home = () => {
  const [query,setQuery]=React.useState('')
  const [store,setStore]=React.useState()
  const [loading,setLoading]=React.useState(false)
 
  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(query===''){
    return alert('please enter valid Google Scholar link')
    }
    setLoading(true)
     axios.post('http://localhost:4000/test',{
       query
     }).then((res)=>{
    
 setStore(res.data)
 setQuery('')
 setLoading(false)
     }).catch((e)=>{
      alert('something goes wrong,please check internet connection.')
      console.log(e)
      setLoading(false)
      // Navigate('/titles')
     })
  

  }
// console.log(store)
  
  
  return (



<div className='container-fluid '>
  <div className='row'>
    <div className='col-lg-8 offset-lg-2 '>
    <Header  />
    </div>
  </div>
  {/* row 2 */}
  {!store ? <><div className='row'>
    <div className='col-lg-6 col-md-8  offset-md-2 offset-lg-3 mb-2 '>
      <form className="form mt-2">
        <input required value={query} onChange={(e)=>setQuery(e.target.value)} className=' search-input mb-3'  placeholder='         take a link from  Google scholar and pasted here'/><span className='search'><i className="fa fa-search " onClick={handleSubmit}></i></span>  
      </form>
    </div>
  </div></>: "" }
 

  <div className='row'>
    <div className='col-lg-12  justify-content-center '>
    {loading? <Loading />:<Titles  data={store} /> }

    </div>

  </div>
  


 
</div>
  
  )
}

export default Home


// {loading ? <h1 className='text-center mt-5'>Loading ....</h1>:  (
//   <>
//   {store && <div className='row mx-auto d-flex'>
// <div className='col-lg-6 col-md-6 offset-md-2 offset-lg-4 '>

// <ul >
//   <li className='d-flex '>
//     {/* <button onClick={()=>totalPapers()}>Click</button> */}
//     {/* <Link to='/totalpapers' > */}
    
//     <Totalpapers  papers={store.Papers}  journal={store.ConferenceLinks}/>
//     {/* </Link> */}
// {/* <span className=' papers  '>Totals papers </span> <i  className='search-danger'>{ store.Papers}</i>  */}
//   </li>
//   <br/>

//   <li className='d-flex'>
//   <span className=' papers'>Journals papers </span><span className='search-yellow'><i >{ store.Journals}</i></span>
//   </li>
//   <br/>

//   <li className='d-flex'>
//   <span className=' papers'>Conference papers </span><span className='search-green'><i >{store.Conference}</i></span> 

//   </li>
// </ul>
    

// </div>
//     </div>
  
//   }
  

  
  
//   </>
// )}