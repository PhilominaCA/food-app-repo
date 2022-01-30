import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { MenuContext } from '../App';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Quantity({ id }) {
  let { cart, setCart, cartTotal, setCartTotal } = useContext(MenuContext);

  return <div>
    <p><Button style={{ fontWeight: "bolder", fontSize: "1.5vw", color: "red", borderRadius: "100%" }}
      onClick={() => {
        if (cart[id].quantity > 1) {
          setCartTotal(+cartTotal - parseInt(cart[id].price));
          const updateditem = { name: cart[id].name, price: cart[id].price, image: cart[id].image, quantity: cart[id].quantity - 1 };
          cart.splice(id, 1, updateditem);
        }
      }}><RemoveCircleOutlineIcon /></Button>{cart[id].quantity}

      <Button style={{ fontWeight: "bolder", fontSize: "1.5vw", borderRadius: "100%" }}
        onClick={() => {
          const updateditem = { name: cart[id].name, price: cart[id].price, image: cart[id].image, quantity: cart[id].quantity + 1 };
          cart.splice(id, 1, updateditem);
          setCart(cart);
          setCartTotal(parseInt(cart[id].price) + cartTotal);
        }}><AddCircleOutlineIcon /></Button>
    </p>
  </div>;
}

export default Quantity;
