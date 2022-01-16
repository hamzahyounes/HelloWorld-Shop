import * as React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Avatar } from '@mui/material';


const options = [
  <Link to="/cart" className='cart-container' style={{color: "#444", margin: "auto",}}>
    <p style={{marginRight: "1rem"}}>Your Cart</p>
  </Link>,

  <Link to="/cart" className='cart-container' style={{color: "#444", margin: "auto"}}>
    <p style={{marginRight: "1rem"}}>Your Wishlist</p>
  </Link>,

  <Link to="/cart" className='cart-container' style={{color: "#444", margin: "auto"}}>
    <p style={{marginRight: "1rem"}}>Log out</p>
  </Link>,
];

const ITEM_HEIGHT = 45;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}