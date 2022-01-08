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

export const searchedProductsReducer = (state=[], {type, payload}) => {
    switch(type) {
        case actionTypes.SET_SEARCHED_PRODUCTS:
            return {...state, products: payload}
        default:
            return state;
    }
}

export const searchQuery = (state = '', {type, payload}) => {
    switch(type) {
        case actionTypes.SET_QUERY:
            return payload
        default:
            return state
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

export const productCartProducer = (state= [], {type, payload}) => {
    switch(type) {
        case actionTypes.ADD_PRODUCT:
            const editedProduct = state.find(product => product.id === payload.id);
            if(editedProduct) {
                const newState = [...state]
                editedProduct.count +=1;
                const editedIndex = newState.indexOf(editedProduct)
                state[editedIndex] = editedProduct
                return newState
            }
            return state.concat([{...payload, count: 1, liked: false}])

        case actionTypes.SUBSTRACT_PRODUCT:
            const subtractedProduct = state.find(product => product.id === payload.id);
            if(subtractedProduct) {
                const newState = [...state]
                if(subtractedProduct.count > 0) subtractedProduct.count -=1;
                const subtractedIndex = newState.indexOf(subtractedProduct)
                state[subtractedIndex] = subtractedProduct
                return newState
            }

        case actionTypes.REOMOVE_PRODUCT_FROM_CART:
            const index = state.indexOf(payload)
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