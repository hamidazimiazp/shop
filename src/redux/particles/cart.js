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
            const newList = state.list.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                list: [...newList],
                ...sumItems(state.list)
            }
        },
        increaseItem: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            state.list[index].quantity++;
            return {
                ...state,
                ...sumItems(state.list)
            }
        },
        decreaseItem: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            state.list[index].quantity--;
            return {
                ...state,
                ...sumItems(state.list)
            }
        },
        checkout: (state, action) => {
            return {
                list: [],
                totalPrice: 0,
                itemsCounter: 0,
                checkOut: true
            }
        },
        clear: (state, action) => {
            return {
                list: [],
                totalPrice: 0,
                itemsCounter: 0,
                checkOut: false
            }
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