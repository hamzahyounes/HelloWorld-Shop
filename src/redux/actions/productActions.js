import { actionTypes } from '../constants/actions-types'

export const setProducts = products => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const setSearchedProducts = searchedProducts => {
    return {
        type: actionTypes.SET_SEARCHED_PRODUCTS,
        payload: searchedProducts,
    }
}

export const setSearchQuery = query => {
    return {
        type: actionTypes.SET_QUERY,
        payload: query
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

export const substractProductFromCart = product => {
    return {
        type: actionTypes.SUBSTRACT_PRODUCT,
        payload: product
    }
}

export const removeFromCart = id => {
    return {
        type: actionTypes.REOMOVE_PRODUCT_FROM_CART,
        payload: id,
    }
}