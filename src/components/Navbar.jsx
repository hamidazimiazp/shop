import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AddShoppingCart } from '@material-ui/icons';


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
            marginLeft: 30
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

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.menuItems}>
                        <Typography variant="h6" className={classes.title}>
                            Shop
                        </Typography>
                        <div className={classes.linkWrapper}>
                            <Link to="/products/">products</Link>
                        </div>
                    </div>
                    <Badge badgeContent={4} className={classes.badge} color="error" overlap="rectangular">
                        <AddShoppingCart />
                    </Badge>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;