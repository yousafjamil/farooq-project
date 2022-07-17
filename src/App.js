import { Routes, Route } from 'react-router-dom'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import Conferencepaper from './components/Conferencepaper';
// import Footer from './components/Footer';
import Home from './components/Home';
import Journalpaper from './components/Journalpaper';
// import Links from './components/Links';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import Titles from './components/Titles';


function App() {
  return (
    <div className="App">
    
     <Navbar />
 
    
     <Routes>
   
       <Route exact path='/' element={<Home />}></Route>
       <Route exact path='/titles' element={<Titles />}></Route>
       <Route exact path='/conferencepaper' element={<Conferencepaper />}></Route>
    
       <Route exact path='/journalpaper' element={<Journalpaper  />}></Route>
       <Route exact path='*' element={<Notfound />}></Route>
       
     </Routes>
     {/* <Footer /> */}
    </div>
  );
}

export default App;
