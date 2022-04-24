import { createSlice } from "@reduxjs/toolkit";



const reducer = createSlice({
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
                })
            }
            return {
                ...state,
                list: [...state.list],
                checkOut: false
            }
        },
        removeItem: (state, action) => {
            const newList = state.list.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                list: [...newList]
            }
        },
        increaseItem: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            state.list[index].quantity++;
            return {
                ...state,
            }
        },
        decreaseItem: (state, action) => {
            const index = state.list.findIndex(item => item.id === action.payload.id);
            state.list[index].quantity--;
            return {
                ...state,
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
})