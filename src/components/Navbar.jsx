import React from 'react';
import { AppBar, Toolbar, Typography, Badge, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AddShoppingCart } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { textShortener } from "../utils/tools";
import CartActionButtons from './CartActionButtons';



const Navbar = () => {

    const useStyles = makeStyles(theme => ({
        root: {
            position: 'relative'
        },
        showCartPanel: {
            width: 400,
            minHeight: 200,
            maxHeight: 500,
            overflowY: "hidden",
            position: "fixed",
            right: 20,
            top: 42,
            background: "#fff",
            zIndex: 9999,
            color: "#000",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
            borderRadius: 7,
            display: "none",
            "&:hover": {
                display: "block",
                overflowY: "auto",
                scrollbarColor: "#ccc #f1f1f1",
                scrollbarWidth: "thin"
            }
        },
        toolbar: {
            display: "flex",
            justifyContent: "space-between"
        },
        linkWrapper: {
            marginTop: 5,
            "& > a": {
                marginLeft: 30,
                color: "#fff",
                fontSize: 18,
                textDecoration: "none"
            }
        },
        title: {
            "& > a": {
                color: "#fff",
                fontSize: 22,
                textDecoration: "none"
            }
        },
        menuItems: {
            display: "flex",
            justifyContent: "space-between",
        },
        badge: {
            cursor: "pointer",
            "&:hover ~ div": {
                display: "block"
            }
        },
        buttonsWrapper: {
            textAlign: "center",
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        imageCardWrapper: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
        },
        footer: {
            position: 'sticky',
            display: "flex",
            bottom: 0,
            justifyContent: "space-between",
            padding: 10,
            background: "#fff",
            boxShadow: "-2px 0 20px rgba(0,0, 0, 0.2)"
        },
        header: {
            position: 'sticky',
            display: "flex",
            top: 0,
            justifyContent: "space-between",
            padding: 10,
            background: "#fff",
            zIndex: 999,
            boxShadow: "0 2px 2px rgba(0,0, 0, 0.2)"
        },
        emptyWarning: {
            textAlign: "center",
            padding: 30,
            color: "red",
        }
    }));

    const classes = useStyles();

    const quantities = useSelector(state => state.entities.cart.itemsCounter);
    const totalPrice = useSelector(state => state.entities.cart.totalPrice);
    const cart = useSelector(state => state.entities.cart.list);

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.menuItems}>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/">Shop</Link>
                        </Typography>
                        <div className={classes.linkWrapper}>
                            <Link to="/products/">Products</Link>
                            <Link to="/cart/">Cart</Link>
                        </div>
                    </div>
                    <Badge badgeContent={quantities === 0 ? "0" : quantities} className={classes.badge} color="error" overlap="rectangular">
                        <AddShoppingCart />
                    </Badge>
                    <div className={classes.showCartPanel}>
                        <div className={classes.header}>
                            <Typography variant="subtitle2" color="textSecondary">
                                {(quantities > 1) ? `${quantities} Products` : `${quantities} Product`}
                            </Typography>
                            <Button size="small" variant="contained" color="primary"

                            >
                                <Link to="/cart/" style={{ color: "#fff", textDecoration: "none" }}>View Cart</Link>
                            </Button>
                        </div>
                        {
                            quantities > 0 ?
                                cart.map(item => {
                                    return (
                                        <div key={item.id}>
                                            <Grid container style={{ padding: 10 }}>
                                                <Grid item sm={4} className={classes.imageCardWrapper}>
                                                    <img src={item.image} alt={item.title} width="70%" />
                                                    <div style={{ marginTop: 20 }}>
                                                        <span>
                                                            {`$${item.price}`}
                                                        </span>
                                                    </div>
                                                </Grid>
                                                <Grid item sm={8}>
                                                    <h4>{textShortener(item.title, 22)}</h4>
                                                    <div className={classes.buttonsWrapper}>
                                                        <CartActionButtons data={item} />
                                                    </div>
                                                </Grid>
                                            </Grid>
                                            <hr style={{ border: "1px solid #dddd" }} />
                                        </div>
                                    );
                                })
                                :
                                <Typography className={classes.emptyWarning} variant="h5" color="initial">Cart is Empty</Typography>
                        }
                        <div className={classes.footer}>
                            <Typography variant="h6" color="initial">
                                Total Price : {`$${totalPrice}`}
                            </Typography>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    );
}

export default Navbar;