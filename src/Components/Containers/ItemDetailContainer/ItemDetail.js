import { AddCardTwoTone } from "@mui/icons-material";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount"
import {cartContext } from "../../CartContext/CartContext";


//--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--//



const ItemDetail = ({ product }) => {

  const [buyFinalized, setBuyFinalized] = useState(false)
  const { addProduct } = useContext(cartContext);
 
  const delivery = (count) => {
  
   
    
    addProduct({...product, qty: count});
  setBuyFinalized(true);
 }

  return (
    <div key="id" class="row ">
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img  src={product.image} alt={product.title}></img>
              <span  class="card-title">{product.title}</span>
            </div>
            <div class="card-content">
              <p >Precio: {product.price}</p>
              <p >{product.description}</p> 
      
            </div>
            
            <div class="card-action">
        
           
            </div>
            
          </div>
        
        </div>
        {buyFinalized
          ? <Link to="/carrito">
            <button className="waves-effect waves-light btn">Finalizar compra</button>
            </Link>
          : <ItemCount initial={1} stock={5} delivery={delivery} />}
      </div>
  );
};



export default ItemDetail