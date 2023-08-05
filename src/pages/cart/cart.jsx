import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { Shopcontext } from '../../context/shop-context'
import { CartItems } from './cart-items'
import "./cart.css";
import {useNavigate} from "react-router-dom"

export const Cart = () => {
  const navigate=useNavigate()
  const {cartItems,getTotalCartAmount}=useContext(Shopcontext)
  const totalAmount=getTotalCartAmount();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((pr)=>{
          if(cartItems[pr.id]!==0)
          {
            return <CartItems data={pr} />
          }
        })}

      </div>
      {totalAmount>0? <div className='checkout'>
        <p>Subtotal:₹{totalAmount}</p>
        <button onClick={()=>navigate("/")}>Continue Shopping </button>
        <button >Checkout</button>
      </div>:<h1>Your Cart is Empty</h1>}
      
    </div>
  )
}
