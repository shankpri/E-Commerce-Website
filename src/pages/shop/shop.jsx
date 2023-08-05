import React, { useContext } from 'react'
import {PRODUCTS} from "../../products";
import "./shop.css";
import { Shopcontext } from '../../context/shop-context'; 

export const Shop = () => {
  const {addToCart,cartItems}=useContext(Shopcontext)
  let cartItemAmount;
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Priyank's Shop</h1>
        </div>
            <div className='products'>
              
            {PRODUCTS.map((p) =>{
              cartItemAmount=cartItems[p.id]             
              return(    
                  <div className='product'>
                    <img src={p.productImage} alt="" />
                    <div className='description'>
                        <p><b>{p.productName}</b></p>
                        <p>₹{p.price}</p>
                    </div>
                    <button className='addtocartbttn' onClick={()=> addToCart(p.id)}>Add to Cart{cartItemAmount>0 && <>({cartItemAmount})</>}</button>
                </div>        
            )}
            )}
            </div>
    </div>
  )
}
