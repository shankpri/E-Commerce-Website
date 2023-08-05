import React,{useContext} from 'react'
import { Shopcontext } from '../../context/shop-context'


export const CartItems = (props) => {
    const {id,productName,price,productImage}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemsCount}=useContext(Shopcontext)

  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>₹{price}</p>
            <div className='countHandler'>
            <button onClick={()=>removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItemsCount(Number(e.target.value),id)} />
            <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
