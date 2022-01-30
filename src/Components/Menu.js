import React, { useContext } from 'react';
import { MenuContext } from '../App';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import SentimentVerySatisfiedSharpIcon from '@mui/icons-material/SentimentVerySatisfiedSharp';


function Menu() {

  const { menus } = useContext(MenuContext);
  const nav = useNavigate();
  return (<div className="menu-item">
    {menus.map(({ image, subItemsData }, i) => (
      <Card style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", height: "55vh", width: "30vw" }}>
        <div >
          <CardActionArea>
            <CardMedia className="poster"
              component="img"
              alt="Poster"
              image={image}
              title="Poster"
              style={{ height: "45vh", width: "30vw" }}
            />
            <CardContent>
              <div>
                <div className='menu-title'>
                  <span> {subItemsData.name}.. <SentimentVerySatisfiedSharpIcon /></span>  <Button variant="contained" endIcon={<SendIcon style={{ color: "white" }} />}
                    style={{ backgroundColor: "black", fontFamily: "Cursive" }} onClick={() => nav('/menu/' + i)}> View Menu</Button>
                </div>
                <div>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </div>
      </Card>
    ))}

  </div>)
}

export default Menu;
