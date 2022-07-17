import React from 'react'
// import second from './logo.png'
import { Link } from 'react-router-dom';
// import Header from './Header';
import Conferencepapers from './Conferencepapers';
import Journalpapers from './Journalpapers';
import Totalpaper from './Totalpaper';
const Titles = ({ data }) => {

console.log(data)

  return (

    <>


      {data &&
        <div className='container justify-content-center'>
          <div className='row '>
            <div className='col-lg-8 offset-lg-3 col-md-8 offset-md-3 '>
              <Totalpaper totalpaper={data.Papers} />
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-lg-6'>
            <Link to={'/journalpaper'} state={{ journal: data.JournalLinks, papers: data.Papers, title: data.JournalTitles }}>
                <Journalpapers journal={data.Journals} links={data.JournalLinks} /><br />
              </Link>
            </div>
            <div className='col-lg-6'>
            <Link to={'/conferencepaper'} state={{ conference: data.ConferenceLinks ,title:data.ConferenceTitles}} >
                <Conferencepapers conference={data.Conference} />
              </Link>
            </div>
            {/* <div className='col-lg-8 offset-lg-3 col-md-8 offset-md-3 '>
             
            </div> */}
          </div>

          <div className='row'>
            <div className='col-lg-8 offset-lg-3 col-md-8 offset-md-3 '>
              
            </div>
          </div>


        </div>



      }



    </>
  )
}

export default Titles
{/* <Conferencepapers conference={data.Conference} links={data.ConferenceLinks} titles={data.Titles} /> */ }


{/* <Journalpapers journal={data.Journals} links={data.JournalLinks} /> */ }


{/* <span className=' papers  '>Totals papers </span><span className='search-skyblue'><i className="  ">{data.Papers}</i></span>  <br/><br/><br/>
     <span className=' papers'>Journals papers </span><span className='search-yellow'><i className="  ">1000</i></span> <br/><br/><br/>
      <span className=' papers'>Conference papers </span><span className='search-red'><i className="  ">1000</i></span>  */}


