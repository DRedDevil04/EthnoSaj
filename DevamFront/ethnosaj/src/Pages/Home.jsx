
import React from 'react'
import Slides from '../Components/Slides';
import Collections from '../Components/Collections';
import CatalogHome from '../Components/CatalogHome';
import Testimonial from '../Components/Testimonial';


const Home = () => {
  
  return ( 
   <div>
    <Slides />
    <Collections />
    <CatalogHome />
    <Testimonial />
   </div>
    
  );
}

export default Home;