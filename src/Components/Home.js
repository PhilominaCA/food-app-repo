import SentimentVerySatisfiedSharpIcon from '@mui/icons-material/SentimentVerySatisfiedSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import InsertEmoticonSharpIcon from '@mui/icons-material/InsertEmoticonSharp';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Home() {

  const nav = useNavigate('');

  return <div className='body-div'>
    <div className='food-quote'>
      <p>Ch<InsertEmoticonSharpIcon fontSize='large' />
        <SentimentVerySatisfiedSharpIcon fontSize='large' />se the taste, at your place..<FavoriteBorderSharpIcon fontSize='large' /></p>
      <Button variant="contained"
        endIcon={<SendIcon style={{ color: "black" }} />}
        style={{ fontFamily: "Cursive", backgroundColor: "rgb(185, 207, 60)", color: "black" }}
        onClick={() => nav('/menu')}> View Menu</Button></div>
  </div>;
}

export default Home;
