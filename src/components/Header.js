import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Header = () => {
    const prouctsInCart = useSelector(state => state.cart);
    const productsCount = prouctsInCart.length;
    return(
        <div className='header' id="header">
                <Link className='fakeshop-icon' to='/'>
                    Hello World
                </Link>
            <Link className='cart-container' to="/cart">
                <h5 className='products-count'>{productsCount}</h5>
                <AiOutlineShoppingCart className='cart-icon' />
            </Link>
        </div>
    )
}

export default withRouter(Header);