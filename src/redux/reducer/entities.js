import { combineReducers } from "redux";
import { reducer as productsReducer } from "../particles/products";

export default combineReducers({
    products: productsReducer
});