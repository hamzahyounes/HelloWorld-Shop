import { combineReducers } from "redux";
import { productCartProducer, productReducer, selectedProductReducer } from "./productReducer";

export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: productCartProducer,
})
