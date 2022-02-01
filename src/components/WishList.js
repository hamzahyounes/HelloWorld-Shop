import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosTrash } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { toast } from 'react-toastify'
import { emptyWishlist, removeFromWishlist, addProductToCart } from '../redux/actions/productActions';

const WishList = () => {
    const products = useSelector(state => state.wishlist)
    const dispatch = useDispatch();

    const addProductCart = product => {
        dispatch(addProductToCart(product))
        toast.success("Added to your cart!")
    }

    const removeProductFromWishlist = product => {
        dispatch(removeFromWishlist(product))
    }

    const resetWishlist = () => {
        dispatch(emptyWishlist())
    }

    return(
        <React.Fragment>
            {products.length === 0 
                ? <div style={{color: "#222", display: "flex", justifyContent: "center"}}><h4>Your Wishlist Is Empty 😕.</h4></div>
                : products.map(product => {
                    const {count, title, image, price, description, category, id} = product;
                    return <div className="product-container-cart" key={`${id + title}`}>
                        <div className="product-in-cart">
                            <div className='product-image-cart'>
                                <img src={image} alt={title}/>
                            </div>
                            <div className="product-info-cart">
                                <h3 className="product-title-cart">{title}</h3>
                                <h4 className="product-price-cart">${price}</h4>
                                <div style={{backgroundColor: "white"}}><h6 className="product-category-cart">{category}</h6></div>
                                <h6 className="product-description" >{description}</h6>
                                <div className='wishlist-icons'>
                                    <div className="remove-from-wishlist" onClick={() => removeProductFromWishlist(product)}>
                                        <h4>Remove From Wishlist</h4>
                                        <IoIosTrash className='remove-from-cart-icon' />
                                    </div>
                                    <div className="add-to-cart" onClick={() => addProductCart(product)}>
                                        <h4>Add To Cart</h4>
                                        <AiOutlineShoppingCart className='add-to-cart-icon' />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                })
            }
            {products.length === 0 ? null : <button className='empty-cart' onClick={resetWishlist}>Empty Wishlist</button>}
            </React.Fragment>

    )
}

export default WishList;