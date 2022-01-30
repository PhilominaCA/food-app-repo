import React, { useContext } from 'react';
import { MenuContext } from '../App';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import Quantity from './Quantity';
import { ToastContainer, toast } from 'react-toastify';

function Cart() {
  const { cart, setCart, cartTotal, setCartTotal } = useContext(MenuContext);

  const handleDelete = (item, index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    setCartTotal(item.quantity > 1 ? cartTotal - (parseInt(item.price) * (parseInt(item.quantity))) :
      cartTotal - (parseInt(item.price) * parseInt(item.quantity)));
    toast("Item removed from Cart..", {
      autoClose: 1500
    });


  }

  return <>
    <h2 className='menu-list-head'>My Cart &emsp;&emsp;
      <span className='cart-head'>Items : {cart.length} &emsp; Cart Total : ₹{cartTotal} </span></h2>
    <ToastContainer closeOnClick draggable />
    <div className='cart-list'>{cart.length ?
      cart.map((item, index) => (
        <div className='menu-list-item' key={index}>
          <img src={item.image} alt="product" />
          <p className='menu-desc'> <p className='item-name'>{item.name} - ₹{item.price}
            <IconButton style={{ color: "red" }} onClick={() => handleDelete(item, index)}><DeleteIcon /></IconButton></p>
          </p>
          <Quantity id={index} />
        </div>)) : <h2 className='empty-list'>No items added to your Cart yet !</h2>}
    </div>
  </>;
}

export default Cart;