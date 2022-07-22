import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../CartContext/CartContext';


const CartWidget = () => {

  const { qtyProducts } = useContext(cartContext);

  return (
    <>
      <ShoppingCartIcon color="success" fontSize="large" />
      <p>Items en carrito: {qtyProducts}</p>
    </>
  )
}

export default CartWidget