import { Button, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';


const ProductDetail = () => {

    const useStyles = makeStyles(theme => ({
        container: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "35px 150px 50px",
            padding: 20,
            border: "1px solid silver",
            backgroundColor: "#fff",
            borderRadius: 10,
        },
        image: {
            maxWidth: 350,
            maxHeight: 450
        },
        detailsContent: {
            textAlign: "left",
            marginLeft: 30,
            padding: 20,
            border: "1px solid silver",
            borderRadius: 10,
        },
        title: {
            color: "#1a73e8",
            margin: "20px 0 30px"
        },
        description: {
            color: "rgb(62, 62, 62)",
            marginBottom: 30,
        },
        category: {
            color: "rgb(62, 62, 62)",
            fontWeight: "bold",
            marginBottom: 50,
            "& > span": {
                color: "orange",
                fontSize: "1rem",
            }
        },
        buttons: {
            display: "flex",
            justifyContent: "space-between"
        },
        btn: {
            margin: 10,
            "& a": {
                color: "#fff",
                textDecoration: "none"
            }
        },
        btnPrice: {
            background: "orange",
            color: "#fff",
            "&:hover": {
                background: "orange"
            }
        }
    }));

    const classes = useStyles();

    const params = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.entities.products.list);
    const product = products[[params.id - 1]];


    const { image, category, description, title, price } = product;

    return (
        <>
            <div className={classes.container}>
                <img className={classes.image} src={image} alt={title} />
                <div className={classes.detailsContent}>
                    <h3 className={classes.title}>{title}</h3>
                    <p className={classes.description}>
                        {description}
                    </p>
                    <div className={classes.category}>
                        <span>Category : </span> {category}
                    </div>
                    <div className={classes.buttons}>
                        <div>
                            <Button className={`${classes.btn} ${classes.btnPrice}`} variant="contained">
                                ${price}
                            </Button>
                        </div>
                        <div>
                            <Button className={classes.btn} variant="contained" color="primary">
                                Add To Cart
                            </Button>

                            <Button className={classes.btn} variant="contained" color="primary">
                                <Link to='/products'>Back To Shop</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;