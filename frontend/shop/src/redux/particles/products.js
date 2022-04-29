import { createSlice } from "@reduxjs/toolkit";
import * as actions from "../actions/api";


const slice = createSlice({
    name: "products",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        productsRequested: (products, action) => {
            products.loading = true;
            products.lastFetch = Date.now();
        },
        productsRecieved: (products, action) => {
            products.list = action.payload.data;
            products.loading = false;
        },
        productsFaild: (products, action) => {
            products.loading = false;
        },
    }
})


export const {
    productsRequested,
    productsRecieved,
    productsFaild
} = slice.actions;

export const reducer = slice.reducer;

// action creators
const url = "/products/";

export const loadProducts = () => (dispatch, getState) => {
    dispatch(actions.apiCallBegan({
        url,
        data: [],
        onStart: productsRequested.type,
        onSuccess: productsRecieved.type,
        onFaild: productsFaild.type
    }));
}