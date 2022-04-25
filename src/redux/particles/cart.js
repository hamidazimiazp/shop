import { createSlice } from "@reduxjs/toolkit";
import { sumItems } from "../../utils/tools";


const slice = createSlice({
    name: "cart",
    initialState: {
        list: [],
        itemsCounter: 0,
        totalPrice: 0,
        checkOut: false
    },
    reducers: {
        addItem: (state, action) => {
            if (!state.list.find(item => item.id === action.payload.id)) {
                state.list.push({
                    ...action.payload,
                    quantity: 1
                });
                state.checkOut = false;
                const { itemsCounter, totalPrice } = sumItems(state.list);
                state.itemsCounter = itemsCounter;
                state.totalPrice = totalPrice;
            }
        },
        removeItem: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            state.list.splice(index, 1);
            const { itemsCounter, totalPrice } = sumItems(state.list);
            state.itemsCounter = itemsCounter;
            state.totalPrice = totalPrice;
        },
        increaseItem: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            state.list[index].quantity++;
            const { itemsCounter, totalPrice } = sumItems(state.list);
            state.itemsCounter = itemsCounter;
            state.totalPrice = totalPrice;
        },
        decreaseItem: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            state.list[index].quantity--;
            const { itemsCounter, totalPrice } = sumItems(state.list);
            state.itemsCounter = itemsCounter;
            state.totalPrice = totalPrice;
        },
        checkout: (state, action) => {
            state.list = [];
            state.checkOut = true;
            state.totalPrice = 0;
            state.itemsCounter = 0;
        },
        clear: (state, action) => {
            state.list = [];
            state.checkOut = false;
            state.totalPrice = 0;
            state.itemsCounter = 0;
        }
    }
});


export const {
    addItem,
    removeItem,
    increaseItem,
    decreaseItem,
    checkOut,
    clear
} = slice.actions

export const reducer = slice.reducer;