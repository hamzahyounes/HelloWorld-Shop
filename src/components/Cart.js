import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosTrash } from 'react-icons/io';
import { TiPlus } from 'react-icons/ti'
import { FaMinus } from 'react-icons/fa'
import { addProductToCart, substractProductFromCart, removeFromCart, setEmptyCart } from '../redux/actions/productActions';

const Cart = () => {
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const removeProductFromCart = product => {
        dispatch(removeFromCart(product))
    }
    const addProductCart = product => {
        dispatch(addProductToCart(product))
    }
    const subsractProductCart = product => {
        dispatch(substractProductFromCart(product))
    }
    const emptyCart = () => {
        dispatch(setEmptyCart())
    }

    return(
        <React.Fragment>
            {products.length === 0 
                ? <div style={{color: "#222", display: "flex", justifyContent: "center"}}><h4>Your Cart Is Empty 😕.</h4></div>
                : products.map(product => {
                    const {count, title, image, price, description, category, id} = product;
                    return <div className="product-container-cart" key={id}>
                        <div className="product-in-cart">
                            <div className='product-image-cart'>
                                <img src={image} alt={title}/>
                            </div>
                            <div className="product-info-cart">
                                <h3 className="product-title-cart">{title}</h3>
                                <h4 className="product-price-cart">${price}</h4>
                                <div style={{backgroundColor: "white"}}><h6 className="product-category-cart">{category}</h6></div>
                                <h6 className="product-description" >{description}</h6>
                                <div className='qunatity-container'>
                                    <FaMinus className={count > 0 ? 'subtract-quantity' : 'subtract-quantity faded-btn'} onClick={() => subsractProductCart(product)}/>
                                    <div className='quantity-box'>
                                        <p style={{color: "#666", fontWeight:"bold"}} className='quantity'>{count}</p>
                                    </div>
                                    <TiPlus className='add-quantity' onClick={() => addProductCart(product)}/>
                                </div>
                                <div className="remove-from-cart" onClick={() => removeProductFromCart(product)}>
                                    <h4>Remove From Cart</h4>
                                    <IoIosTrash className='remove-from-cart-icon' />
                                </div>
                            </div>
                        </div> 
                    </div>
                })
            }
            {products.length === 0 ? null : <button className='empty-cart' onClick={emptyCart}>Empty Cart</button>}
            </React.Fragment>

    )
}

export default Cart;