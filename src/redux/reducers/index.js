import { combineReducers } from "redux";
import { currentCategory, setCategoryProducts, productCartProducer, productReducer, searchedProductsReducer, searchQuery, selectedProductReducer } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    searchedProducts: searchedProductsReducer,
    product: selectedProductReducer,
    cart: productCartProducer,
    query: searchQuery,
    category: currentCategory,
    categoryProducts: setCategoryProducts,
})
