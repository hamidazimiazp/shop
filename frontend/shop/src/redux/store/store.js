import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/index";
import { api } from "../middlewares/api";
import { func } from "../middlewares/func";

export default function store() {
    return configureStore({
        reducer,
        middleware: [
            func,
            api
        ]
    })
}