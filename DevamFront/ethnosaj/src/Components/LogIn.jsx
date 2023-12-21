import Carousel from 'react-bootstrap/Carousel';
import starboy from "../assets/starboy.jpeg"
import p2 from "../assets/p_3.png"
import p3 from "../assets/p_12.png"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormBar from './FormBar';
import SubmitForm from './SubmitForm';

import axios from 'axios';

function LogIn() {
    const [data,setData]=useState({
        
        email:"",
        password:""
    });
    const baseURL="https://localhost:8000/api/v1/"

    function emailChange(e){
        setData({
            ...data, // Copy the old fields
            email: e.target.value // But override this one
          });
    }
    
    function passwordChange(e){
        setData({
            ...data, // Copy the old fields
            password: e.target.value // But override this one
          });
    }


    function onSubmitF (e){
        
        e.preventDefault();
        const url=baseURL+"auth/login"
        try {
            const res= axios.post(url,data).then(res=>{
                console.log(res);
            })
        } catch (error) {
            console.log(error);

        }
        
        
    }
    
  return (
    <div>
    <div className='row'>
      <div className='text-center' style={{
        paddingTop:60,
        fontFamily:"palantino",
        fontSize:50,
        color:"#FFC300"
      }}>Please Log In</div>
    </div>
    <div className='row' style={{
        paddingBottom:70
    }}>
      <div className='col-3' ></div>
    <div className="col-xl-6" style={{
      margin:10,
      border:"2px solid #FFC300",
      borderRadius:50,
      
    }}>
      <div style={{
        margin:50
      }}>
        
      <form>
      
      <FormBar dataChange={emailChange} data={data} dataType="email" type="0"/>
      <FormBar dataChange={passwordChange} data={data} dataType="password" type="1"/>
      <SubmitForm onClick={onSubmitF}/>
      </form>









    </div>
    </div>
    <div className='col-3'>{"    "}</div>
    </div>
    </div>
  );
}

export default LogIn;