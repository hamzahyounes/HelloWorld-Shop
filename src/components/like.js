import React from 'react';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { addToWishlist, removeFromWishlist } from '../redux/actions/productActions';

const Like = props => {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist)
    const addProductToWishlist = product => {
        dispatch(addToWishlist(product))
    }
    const removeProductFromWishlist = product => {
        dispatch(removeFromWishlist(product))
    }
    const currentProduct = useSelector(state => state.allProducts.products).find(p => p === props.product)

    if(wishlist.indexOf(currentProduct) === -1) {
        return (
            <MdOutlineFavoriteBorder className='like-icon' onClick={() => {
                addProductToWishlist(currentProduct)
                toast.success("Added To Your Wishlist!")
                }}
            />
        )
    }
    if(wishlist.indexOf(currentProduct) !== -1) {
        return (
            <MdOutlineFavorite className='like-icon' onClick={() => {
                removeProductFromWishlist(currentProduct)
            }}
            />
        )
    }
}

export default Like;