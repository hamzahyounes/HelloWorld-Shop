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

export const setCategoryProducts = (state= [], { type, payload } ) => {
    switch(type) {
        case actionTypes.SET_CATEGORY_PRODUCTS:
            return payload
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

export const currentCategory = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.SET_CATEGORY:
            if(state.indexOf(payload) === -1) return state.concat([payload])
            else {
                const newState = [...state]
                newState.splice(state.indexOf(payload), 1)
                return newState
            }
        case 'RESET_CATEGORY':
            return []
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

        case actionTypes.EMPTY_CART:
            return []
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

export const wishlistProducts = (state = [], action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_WISHLIST:
            return state.concat([action.payload])
        case actionTypes.REMOVE_FROM_WISHLIST:
            return state.filter(p => p !== action.payload)
        case actionTypes.EMPTY_WISHLIST:
            return []
        default:
            return state;
    }
}