import React, { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../App';
import { useParams, useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { IconButton } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Menuitem() {

  const { menus, cart, setCart, fav, setFav, cartTotal, setCartTotal } = useContext(MenuContext);
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [titleName, setTitle] = useState('');
  const nav = useNavigate();

  const getData = () => {
    if (menus.length > 0) {
      setMenuItems(menus[id].subItemsData.subItems);
      setTitle(menus[id].subItemsData.name);
    }
    else {
      nav('/menu');
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const increment = (item) =>{
    const intemIndx = cart.map((itm) => itm.name).indexOf(item.name);
    let newItem = { name: item.name, price: item.price, image: item.image, quantity: 1 }
    {
      if (intemIndx >= 0) {
        toast.warn("Item already in Cart", {
          autoClose: 1500
        });
      }
      else {
        toast("Item added to Cart", {
          autoClose: 1500
        });
        setCartTotal(cartTotal + (parseInt(item.price)));
        setCart([...cart, newItem]);
      }
    }
  
  }

  const decrement = (item) =>{
    const intemIndx = fav.map((itm) => itm.name).indexOf(item.name);
    {
      if (intemIndx >= 0) {
        toast.warn("Item already in Favourites", {
          autoClose: 1500
        });
      }
      else {
        toast("Item added to Favourites", {
          autoClose: 1500
        });
        setFav([...fav, item]);
      }
    }

  }

  return <>
    <h2 className='menu-list-head'>{titleName}</h2>
    <ToastContainer closeOnClick draggable />
    <div className='menu-list'>
      {menuItems.map((item, i) => (
        <div className='menu-list-item' key={i}>
          <img src={item.image} alt="product" />
          <p className='menu-desc'> <p className='item-name'>{item.name} - ₹{item.price}
            <span><IconButton style={{ color: "black" }} onClick={() => increment(item)}>
              <AddShoppingCartIcon /></IconButton>
              <IconButton style={{ color: "black" }}
                onClick={() => decrement(item)}><FavoriteSharpIcon /></IconButton></span></p>
            <p className='item-desc'>{item.description}</p></p>
        </div>
      ))}
    </div>
  </>
}

export default Menuitem;
