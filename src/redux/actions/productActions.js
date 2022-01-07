import { actionTypes } from '../constants/actions-types'

export const setProducts = products => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectProduct = product => {
    return{
        type: actionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return{
        type: actionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export const addProductToCart = product => {
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: product,
    }
}

export const removeFromCart = id => {
    return {
        type: actionTypes.REOMOVE_PRODUCT_FROM_CART,
        payload: id,
    }
}