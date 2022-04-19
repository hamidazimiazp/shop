import axios from "axios";
import * as actions from "../actions/api";
import { BASE_URL } from "../../configs/index";


export const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.toString()) return next(action);


    const { url, method, data, onSuccess, onError, onStart, onFaild } = action.payload;

    if (onStart) {
        dispatch({ type: onStart });
    }

    next(action);

    try {
        const response = await axios.request({
            baseURL: BASE_URL,
            url,
            method,
            data
        });
        // general
        dispatch(actions.apiCallSuccees({ data: response.data }));
        // select
        if (onSuccess) {
            dispatch({ type: onSuccess, payload: { data: response.data } });
        }
    } catch (error) {
        // general
        dispatch(actions.apiCallFaild({ message: error.message }));
        if (onFaild) {
            dispatch({ type: onFaild });
        }
        // select
        if (onError) {
            dispatch({ type: onError, payload: { message: error.message } });
        }
    }
}