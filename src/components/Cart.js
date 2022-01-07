import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosTrash } from 'react-icons/io';
import { removeFromCart } from '../redux/actions/productActions';

const Cart = () => {
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const removeProductFromCart = product => {
        dispatch(removeFromCart(product))
    }

    return(
        <React.Fragment>
            {products.length === 0 
                ? <div style={{color: "#222", display: "flex", justifyContent: "center"}}><h4>Your Cart Is Empty.</h4></div>
                : products.map(product => {
                    const {title, image, price, description, category} = product;
                    return <div className="product-container">
                        <div className="product">
                            <div className="product-image" >
                                <img src={image} alt={title}/>
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">{title}</h3>
                                <h4 className="product-price tag">${price}</h4>
                                <div style={{backgroundColor: "white"}}><h6 className="product-category">{category}</h6></div>
                                <h6 className="product-description">{description}</h6>
                                <div className="remove-from-cart" onClick={() => removeProductFromCart(product)}>
                                    <h4>Remove From Cart</h4>
                                    <IoIosTrash className='remove-from-cart-icon' />
                                </div>
                            </div>
                        </div> 
                    </div>
                })
            }
            </React.Fragment>

    )
}

export default Cart;