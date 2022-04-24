import React from 'react'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    makeStyles,
    Typography
} from '@material-ui/core';
import { textShortener } from "../utils/tools";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decreaseItem, increaseItem, removeItem } from '../redux/particles/cart';
import { isInCart, quntityCount } from "../utils/tools";
import { Delete } from '@material-ui/icons';

const Product = (props) => {

    const useStyles = makeStyles(theme => ({
        root: {
            position: "relative",
            maxWidth: 345,
            margin: "20px auto",
            "&:hover div img": {
                transform: "scale(.8)",
            },
            "&:hover": {
                boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
            }
        },
        media: {
            height: 350,
            width: 350,
            "& > img": {
                height: "100%",
                width: "100%",
                objectFit: "contain",
                transition: ".3s all"
            }
        },
        constSpan: {
            position: "absolute",
            right: 0,
            background: "hotpink",
            color: "#fff",
            zIndex: 5,
            padding: 8,
            borderBottomLeftRadius: 7,
        }
    }));

    const classes = useStyles();

    const { title, price, description, image } = props.data;


    const dispatch = useDispatch();
    const state = useSelector(state => state.entities.cart);

    return (
        <>
            <Card className={classes.root}>
                <span className={classes.constSpan}>
                    $ {price}
                </span>
                <CardActionArea>
                    <div className={classes.media}>
                        <img loading='lazy' src={image} alt={title} />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {textShortener(title, 10)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {textShortener(description, 110)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "space-around" }}>
                    <Button size="small" color="primary">
                        <Link to={`/products/product/${props.id}`} style={{ textDecoration: "none", color: "#3f51b5" }}>Details</Link>
                    </Button>
                    <div>
                        {
                            (quntityCount(state, props.id) > 1) &&
                            <Button size="small" color="primary" style={{ background: "hotpink", color: "#fff", }}
                                onClick={() => dispatch(decreaseItem(props.data))}
                            >
                                -
                            </Button>
                        }
                        {
                            (quntityCount(state, props.id) === 1) &&
                            <Button size="small" color="primary" style={{ background: "hotpink", color: "#fff", }}
                                onClick={() => dispatch(removeItem(props.data))}
                            >
                                <Delete />
                            </Button>
                        }
                        {
                            (quntityCount(state, props.id) > -1) &&
                            <span style={{ margin: "0 12px", color: "#3f51b5" }} >{quntityCount(state, props.id)}</span>
                        }
                        {
                            isInCart(state, props.id) ?
                                <Button size="small" color="primary" style={{ background: "hotpink", color: "#fff", }}
                                    onClick={() => dispatch(increaseItem(props.data))}
                                >
                                    +
                                </Button>
                                :
                                <Button size="small" color="primary" style={{ background: "hotpink", color: "#fff", }}
                                    onClick={() => dispatch(addItem(props.data))}
                                >
                                    Add to Cart
                                </Button>
                        }
                    </div>
                </CardActions>
            </Card>
        </>
    );
}

export default Product;