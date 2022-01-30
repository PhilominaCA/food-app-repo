import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Menuitem from './Components/Menuitem';
import {
  Link, BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { IconButton } from '@mui/material';
import Fav from './Components/Fav';
import Cart from './Components/Cart';
import Badge from '@mui/material/Badge';
import Contact from './Components/Contact';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const URL = 'https://fod-app.herokuapp.com/food';
export const MenuContext = createContext();

function App() {

  const [menus, setMenus] = useState([]);
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get(URL);
      setMenus(response.data);
    }
    catch (err) {
      alert('There is a problem, please view error in console');
      console.log(err);
    }
  }

  return <>
    <BrowserRouter>
      <MenuContext.Provider value={{ menus, setMenus, cart, setCart, fav, setFav, cartTotal, setCartTotal }}>
        <header>
          <Link to={`/`}> <h2> <FastfoodOutlinedIcon fontSize='large' />&nbsp;FOODIEE</h2></Link>
          <div className='header-menus'><b>
            <Link to='/'><p>Home</p></Link>
            <div class="dropdown">
              <Link to='/menu'>Menu<ArrowDropDownIcon /></Link>
              <div class="dropdown-content">
                <Link to={`/menu/${1}`}><a href="#"><LunchDiningIcon fontSize='small' />&nbsp;Burger's</a></Link>
                <Link to={`/menu/${0}`}><a href="#"><LocalPizzaIcon fontSize='small' />&nbsp;Pizza's</a></Link>
              </div>
            </div>
            <Link to='/contact'><p>Contact</p></Link>
          </b>
            <span>
              <Link to='/my-fav'><IconButton style={{ color: "black" }}>
                <Badge badgeContent={fav.length} color="warning">
                  <FavoriteSharpIcon />
                </Badge>
              </IconButton></Link>&emsp;
              <Link to='/my-cart'><IconButton style={{ color: "black" }}>
                <Badge badgeContent={cart.length} color="warning">
                  <ShoppingCartSharpIcon />
                </Badge>
              </IconButton></Link>&emsp;
            </span>
          </div>
        </header>
        <div>
          <Routes>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/my-fav' element={<Fav />}></Route>
            <Route path='/my-cart' element={<Cart />}></Route>
            <Route path='/menu/:id' element={<Menuitem />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </MenuContext.Provider>
    </BrowserRouter>
  </>
}

export default App;


