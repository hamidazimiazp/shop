import axios from "axios";
import * as actions from "../actions/api";
import { BASE_URL } from "../../configs/index";


export const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

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
        dispatch({ type: actions.apiCallSuccees(response.data) });

        // select
        if (onSuccess) {
            dispatch({ type: onSuccess, payload: { data: response.data } })
        }


    } catch (error) {
        // general
        dispatch({ type: actions.apiCallFaild(error) });

        // select 
        if (onFaild) {
            dispatch({ type: onFaild });
        }
        if (onError) {
            dispatch({ type: onError, payload: { error: error.message } });
        }

    }
}