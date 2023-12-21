import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer/Footer'
import ProdCard from '../Components/ProdCard';
import Breads from '../Components/Breads';
import DescriptionCat from '../Components/DescriptionCat';
import { Divider } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
const CatalogPage = ({category,pg}) => {
    const baseURL="https://ethnosaj-apis.onrender.com/api/v1/"
    
    const url=baseURL+"products/get-product/";
    const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getPrductsByCat();
  });
  const getPrductsByCat = async () => {
    try {
      await axios.get(
       url
      ).then(res=>{
        
        setProducts(res.data.products);
      });
      
      
    } catch (error) {
      console.log(error);
    }
  };
  console.log(products[0]);
  return (
   <div>
        <div className='row'>
            <Breads />
        </div>
        <Divider colorScheme="orange" size="xs"/>
        <div className='row '>
        <div className='col-3'>
            <DescriptionCat /> 
         </div>
    <div className='col'>
    <div className="d-inline-flex flex-wrap">
        {products.map((p)=>
            <div className=' m-2'><ProdCard Product={p} /></div>

        )
   
        }
    </div>
        

    

         {/* <div className='row'>
            <div className='col-xl m-2'><ProdCard product={trial} /></div>
            <div className='col-xl m-2' ><ProdCard product={trial} /></div>
            <div className='col-xl m-2' ><ProdCard product={trial} /></div>
            </div>
        <div className='row'>
            <div className='col-xl m-2' ><ProdCard product={trial} /></div>
            <div className='col-xl m-2' ><ProdCard product={trial} /></div>
            <div className='col-xl m-2' ><ProdCard product={trial} /></div>
        </div>  */}
        </div>
        </div> 
       
       
   </div>
  )
}

export default CatalogPage