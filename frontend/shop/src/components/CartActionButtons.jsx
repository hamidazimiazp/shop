import { Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decreaseItem, increaseItem, removeItem } from '../redux/particles/cart';
import { isInCart, quntityCount } from '../utils/tools';

const CartActionButtons = ({ data }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.entities.cart);

    return (
        <>
            {
                (quntityCount(state, data.id) > 1) &&
                <Button size="medium" variant="contained" color="primary"
                    onClick={() => dispatch(decreaseItem(data))}
                >
                    -
                </Button>
            }
            {
                (quntityCount(state, data.id) === 1) &&
                <Button size="medium" variant="contained" color="secondary"
                    onClick={() => dispatch(removeItem(data))}
                >
                    <Delete />
                </Button>
            }
            {
                (quntityCount(state, data.id) > -1) &&
                <span style={{ margin: "0 12px", color: "#3f51b5" }} >{quntityCount(state, data.id)}</span>
            }
            {
                isInCart(state, data.id) ?
                    <Button size="medium" variant="contained" color="primary"
                        onClick={() => dispatch(increaseItem(data))}
                    >
                        +
                    </Button>
                    :
                    <Button size="medium" variant="contained" color="primary"
                        onClick={() => dispatch(addItem(data))}
                    >
                        Add to Cart
                    </Button>
            }
        </>
    );
}

export default CartActionButtons;