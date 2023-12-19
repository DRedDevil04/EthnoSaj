import React, { useState } from 'react'
import NavBar from '../Components/Navbar'
import Footer from '../Components/Footer/Footer'

const CatalogPage = () => {
    const [products,setProducts]= useState();
  return (
   <div>
        <NavBar />

       
        <Footer />
   </div>
  )
}

export default CatalogPage