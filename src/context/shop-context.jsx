import React, { createContext, useState } from 'react'
import { PRODUCTS} from "../products"
export const Shopcontext=createContext(null);
const getDefaultCart=()=>{
  let cart={ }
  for (let i=1;i<PRODUCTS.length+1;i++)
  cart[i]=0;
return cart;
}

export const Shopcontextprovider = (props) => {
  const [cartItems,setCartItems]=useState(getDefaultCart());

  const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  };
  const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  };
  const updateCartItemsCount =(newAmount,itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:newAmount}))
  }
  const getTotalCartAmount=()=>
  {
    let totalAmount=0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        let itemInfo=PRODUCTS.find((pro)=>pro.id===Number(item))
        totalAmount+=cartItems[item]*itemInfo.price;
      }
    }
    return totalAmount;
  }

  const ContextValue={cartItems,addToCart,removeFromCart,updateCartItemsCount,getTotalCartAmount};
  console.log(cartItems)

  return (
    <Shopcontext.Provider value={ContextValue}>{props.children}</Shopcontext.Provider>
  )
}
