import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AddShoppingCart } from '@material-ui/icons';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const useStyles = makeStyles(theme => ({
        toolbar: {
            display: "flex",
            justifyContent: "space-between"
        },
        linkWrapper: {
            marginTop: 4,
            "& > a": {
                marginLeft: 30,
                color: "#fff",
                fontSize: 18,
                textDecoration: "none"
            }
        },
        title: {
            marginLeft: 30,
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
            cursor: "pointer"
        }

    }));

    const classes = useStyles();

    const quantities = useSelector(state => state.entities.cart.itemsCounter);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.menuItems}>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/">Shop</Link>
                        </Typography>
                        <div className={classes.linkWrapper}>
                            <Link to="/products/">products</Link>
                        </div>
                    </div>
                    <Badge badgeContent={quantities} className={classes.badge} color="error" overlap="rectangular">
                        <AddShoppingCart />
                    </Badge>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;