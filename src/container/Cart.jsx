import React from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { textShortener } from '../utils/tools';
import {
    checkout,
    clear
} from '../redux/particles/cart';
import CartActionButtons from '../components/CartActionButtons';

const Cart = () => {
    const useStyles = makeStyles(theme => ({
        container: {
            marginTop: 70,
            justifyContent: "center",
            padding: 20,
            [theme.breakpoints.down("sm")]: {
                flexDirection: "column-reverse"
            }
        },
        cardCart: {
            width: "80%",
            margin: "10px auto",
            borderRadius: 7,
            display: "flex",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: 10,
            position: "relative",
            [theme.breakpoints.up('sm')]: {
                width: "100%",
            },
            [theme.breakpoints.up('lg')]: {
                width: "80%",
            },
            [theme.breakpoints.down('sm')]: {
                width: "100%",
            },
            "& > img": {
                width: 130,
                height: 150
            }
        },
        cardContent: {
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            "& > h2": {
                fontSize: 16,
            }
        },
        buttons: {
            textAlign: "right",
        },
        price: {
            background: "orange",
            color: "#fff",
            padding: 4,
            borderRadius: 7
        },
        detailWrapper: {
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "80%",
            padding: 10,
            borderRadius: 7,
            margin: "10px auto",
            minHeight: 120,
            position: "sticky",
            top: 100,
            [theme.breakpoints.up('sm')]: {
                width: "90%",
            },
            [theme.breakpoints.down('sm')]: {
                width: "100%",
            },
            [theme.breakpoints.up('lg')]: {
                width: "80%",
            },
        },
        actions: {
            display: "flex",
            justifyContent: "space-between"
        },
        detailP: {
            marginBottom: 5
        },
        checkoutBtn: {
            background: "green",
            "&:hover": {
                background: "#004f00"
            }
        }
    }));

    const classes = useStyles();

    const cart = useSelector(state => state.entities.cart.list);
    const quantities = useSelector(state => state.entities.cart.itemsCounter);
    const totalPrice = useSelector(state => state.entities.cart.totalPrice);
    const isCheckout = useSelector(state => state.entities.cart.checkOut);
    const dispatch = useDispatch();

    return (
        <Grid container className={classes.container}>
            <Grid item sm={12} md={8} className={classes.conItem}>
                {
                    cart.map(item => {
                        return (
                            <div className={classes.cardCart} key={item.id}>
                                <img src={item.image} alt="" />
                                <div className={classes.cardContent}>
                                    <h2>{textShortener(item.title, 22)}</h2>
                                    <div>
                                        <span className={classes.price}>{`$${item.price}`}</span>
                                    </div>
                                    <div className={classes.buttons}>
                                        <CartActionButtons data={item} />
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </Grid>
            <Grid item sm={12} md={4} className={classes.conItem}>
                <div className={classes.detailWrapper}>
                    {
                        (isCheckout === false && quantities === 0) ?
                            "Cart is Empty"
                            :
                            (isCheckout && quantities === 0) ?
                                "Success"
                                :
                                <>
                                    <p className={classes.detailP}>
                                        Total Items : <span style={{ color: "orangered" }}>{quantities}</span>
                                    </p>
                                    <p className={classes.detailP}>
                                        Total Payment : <span style={{ color: "orangered" }}>{`$${totalPrice}`}</span>
                                    </p>
                                    <br />
                                    <div className={classes.actions}>
                                        <Button className={classes.btn2} size="medium" color="secondary"
                                            onClick={() => dispatch(clear())}
                                        >
                                            Clear
                                        </Button>
                                        <Button className={`${classes.btn2} ${classes.checkoutBtn}`} size="medium" variant="contained" color="primary"
                                            onClick={() => dispatch(checkout())}
                                        >
                                            CheckOut
                                        </Button>
                                    </div>
                                </>
                    }
                </div>
            </Grid>
        </Grid>
    );
}

export default Cart;