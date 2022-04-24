import { combineReducers } from "redux";
import { reducer as productsReducer } from "../particles/products";
import { reducer as cartReducer } from "../particles/cart";


export default combineReducers({
    products: productsReducer,
    cart: cartReducer
});