import React from 'react'
import './RelatedComponents.css'
import data_product from '../assets/data'
import Item from '../Item/Item'

const RelatedComponents = () => {
  return (
    <div className='relatedcomponents'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedcomponents-item">
            {data_product.map((item,i)=>{
                return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedComponents
