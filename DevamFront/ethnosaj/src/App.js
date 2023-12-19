import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {BrowserRouter as Router ,Route, Routes, BrowserRouter} from "react-router-dom";
import Home  from './Pages/Home.jsx';
import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Registration from './Pages/Registration.jsx';


function App() {
  
  return (

  <div className='hehe'>
   <BrowserRouter>
     
    <NavBar/>
    {/* <Home /> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/register' element={<Registration/>} />
      {/* <Route exact path="/cart" component={Cart} /> */}
    </Routes>
    <Footer/>
   </BrowserRouter>
   </div>
  );
}

export default App;
