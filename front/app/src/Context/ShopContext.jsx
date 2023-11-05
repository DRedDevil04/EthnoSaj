import React , {createContext, useState} from "react";
import all_product from '../Components/assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for(let index=0;index<all_product.length+1;index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [cartItems , setcartItems] = useState(getDefaultCart());
       

    const addToCart = (itemID) =>{
        setcartItems = ((prev)=>({...prev,[itemID]:prev[itemID]+1}))
    }
 
    const removeFromCart = (itemID) =>{
        setcartItems = ((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }
      
    //  const getTotalCartAmount=()=>{
    //     let totalAmount=0;
    //     for (const item in cartItems){
    //       if(cartItems[item]>0){
    //         let itemInfo=all_product.find((product)=>{product.id===(item)})
    //       }
    //     }
    //  }

    const contextValue = {all_product,cartItems,addToCart,removeFromCart}; 
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
