import React from 'react'
import logo from "../assets/ethnosaj_logo.jpeg"
import "./NavBar.css"
// import BsCart  from "../assets/cart.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div className='row'>
   
    <div className='navbar navbar-expand-lg navbar-light bg-dark '>
    <div className='col-xl-1'>
        <img className='rounded m-2' src={logo} style={{
            height:100,
            width:140,
            paddingLeft:10
        }}/>
          </div>
        <div className='col-xl-1 '>
        <a className='navbar-brand p-3 text-warning ' href="#"  style={{
            fontFamily: 'Cursive',
            fontSize:30,
            
            
        }}>{''}Ethnosaj</a>
      
        </div>
        <div className='col-xl-7 text-center'>
        <div className="btn-group btn-group-toggle p-3 justify-content-center  " data-toggle="buttons" style={{
            marginLeft:30
        }}>
            <Link to="/home">
    <div className="btn btn-secondary my-auto"  style={{
        fontSize:23
    }} >
        Home
        
    </div>
    </Link>
    <Link to="/catalog">
        <div className="btn btn-secondary" style={{
        fontSize:23
    }}>
            Catalog
        </div>
        </Link >
        <Link to="/arrivals">
        <div className="btn btn-secondary" style={{
        fontSize:23
    }}>
       Arrivals
  </div>
  </Link>
  
    </div>
    </div>
    <div className='col-1 d-flex  justify-content-end'>
    <Link to="/register">
        <div className='btn btn-secondary' style={{fontSize:23}}>Register</div>
        </Link >
    </div>
    
    <div className='col-1 d-flex  justify-content-end'>
    <Link to="/login">
        <div className='btn btn-secondary' style={{fontSize:23}}>Sign-In</div>
        </Link>
    </div>
    <div className='col-1 d-flex  justify-content-end'>
        <div>
        {/* <img src={BsCart} style={{
            height:60,
            width:60,
            marginRight:30,
            
        }}/> */}
        <Link to="/cart">
        <FaCartShopping color='white' style={{
            height:40,
            width:40,
            marginRight:30
        }}/>
        </Link>
        </div>
       

    </div>
    </div>
    </div>
  );
}

export default NavBar;