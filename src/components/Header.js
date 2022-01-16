import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Avatar } from '@mui/material';
import { orange } from '@mui/material/colors';
import LongMenu from './LongMenu';

const Header = (props) => {
    const prouctsInCart = useSelector(state => state.cart);
    const productsCount = prouctsInCart.length;
    const hideSearchBar = props.location.pathname === "/";
    return(
        <div className='header' id="header">
            <Link className='fakeshop-icon' to='/'>
                Hello World
            </Link>
            {!hideSearchBar ? null: <SearchBar />}
            <div className='cart-container' >
                <h5 className='products-count'>{productsCount}</h5>
                <Link to="/cart"><AiOutlineShoppingCart className='cart-icon' /></Link>
                <Avatar style={{marginLeft: "1rem"}} sx={{ bgcolor: orange[500] }}>H</Avatar>
                <LongMenu />
            </div>
        </div>
    )
}

export default withRouter(Header);