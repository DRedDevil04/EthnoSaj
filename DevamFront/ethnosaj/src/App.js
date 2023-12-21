import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {BrowserRouter as Router ,Route, Routes, BrowserRouter} from "react-router-dom";
import Home  from './Pages/Home.jsx';
import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Registration from './Pages/Registration.jsx';
import SignIn from './Pages/SignIn.jsx';
import CatalogPage from './Pages/CatalogPage.jsx';
import { useState } from 'react';


function App() {
  const [jwt,setJWT]=useState("");
  return (
  
  <div className='hehe'>
   <BrowserRouter>
     
    <NavBar/>
    {/* <Home /> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/register' element={<Registration/>} />
      <Route path='/login' element={<SignIn/>} />
      <Route path='/catalog' element={<CatalogPage/>} />
      {/* <Route exact path="/cart" component={Cart} /> */}
    </Routes>
    <Footer/>
   </BrowserRouter>
   </div>
  );
}

export default App;
