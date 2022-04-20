import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { loadProducts } from '../redux/particles/products';
import Product from "../components/Product";
import { Grid, makeStyles } from '@material-ui/core';


const ProductsView = () => {

    const useStyles = makeStyles(theme => ({
        container: {
            marginTop: 50,
            justifyContent: "space-between",
            alignItems: "center"
        }
    }));

    const classes = useStyles();


    const dispatch = useDispatch();
    const products = useSelector(state => state.entities.products.list);
    const loading = useSelector(state => state.entities.products.loading);

    useEffect(() => {
        dispatch(loadProducts());
    }, []);


    return (
        <>
            {
                loading ?
                    <Loading />
                    :
                    <Grid container className={classes.container}>
                        {
                            products.map(item => {
                                return <Grid item sm={4}>
                                    <Product
                                        title={item.title}
                                        image={item.image}
                                        category={item.category}
                                        price={item.price}
                                        description={item.description}
                                    />
                                </Grid>
                            })
                        }
                    </Grid>
            }
        </>
    );
}

export default ProductsView;