import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptonBox/DescriptionBox';
import RelatedComponents from '../Components/RelatedComponents/RelatedComponents';


const Product = () => {
  const {all_product} = useContext(ShopContext);
    const {productID} = useParams();
    //console.log(productId)
  //  console.log(all_product)
    const product = all_product.find((e)=>e.id===Number(productID));
    console.log(product)
  return (
    
    <div>
      
        <Breadcrum product = {product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <RelatedComponents/>
    </div>
  )
}
 
export default Product
