import { actionTypes } from "../constants/actions-types";

const initialState = {
    products: []
}
export const productReducer = (state= initialState, {type, payload}) => {
    switch(type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default: 
            return state;
    }
}

export const productCartProducer = (state= [], action) => {
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
            return state.concat([action.payload])
        case actionTypes.REOMOVE_PRODUCT_FROM_CART:
            const index = state.indexOf(action.payload)
            let newState = [...state];
            newState.splice(index, 1);
            return newState
        default:
            return state
    }
}

export const removeCartProducts = (state= [], action) => {
    switch(action.type) {
        case actionTypes.REMOVE_PRODUCTS_FROM_CART:
            return []
        default:
            return state;
    }
}