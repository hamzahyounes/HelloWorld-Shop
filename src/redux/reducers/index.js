import { combineReducers } from "redux";
import { productCartProducer, productReducer, searchedProductsReducer, searchQuery, selectedProductReducer } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    searchedProducts: searchedProductsReducer,
    product: selectedProductReducer,
    cart: productCartProducer,
    query: searchQuery,
})
