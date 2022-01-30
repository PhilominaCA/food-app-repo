import React, { useContext } from 'react';
import { MenuContext } from '../App';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

function Fav() {
    const { fav, setFav } = useContext(MenuContext);

    const handleDelete = (index) => {
        const updatedFav = [...fav];
        updatedFav.splice(index, 1);
        setFav(updatedFav);
        toast("Item removed from Favourite..", {
            autoClose: 1500
        });
    }

    return <>
        <h2 className='menu-list-head'>My Favourites &emsp;&emsp;
            <span className='cart-head'>Items : {fav.length}</span></h2>
        <ToastContainer closeOnClick draggable />
        <div className='cart-list'>
            {fav.length ?
                fav.map((item, index) => (
                    <div className='menu-list-item' key={index}>
                        <img src={item.image} alt="product" />
                        <p className='menu-desc'> <p className='item-name'>{item.name} - ₹{item.price}
                            <IconButton style={{ color: "red" }} onClick={() => handleDelete(index)}>
                                <DeleteIcon /></IconButton></p>
                        </p>
                    </div>)) : <h2 className='empty-list'>No items added to your Favourites yet !</h2>}
        </div>
    </>;
}

export default Fav;
