import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Product from "../components/Product";
import { Grid, makeStyles, TextField } from '@material-ui/core';
import { loadProducts } from '../redux/particles/products';


const ProductsView = () => {

    const useStyles = makeStyles(theme => ({
        container: {
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center"
        },
        searchWrapper: {
            textAlign: "center",
            "& > div": {
                width: "50%",
                [theme.breakpoints.down("sm")]: {
                    width: "80%"
                }
            }
        }
    }));

    const classes = useStyles();


    const dispatch = useDispatch();
    const products = useSelector(state => state.entities.products.list);
    const loading = useSelector(state => state.entities.products.loading);
    const [search, setSearch] = useState("");


    const searchHandler = event => {
        setSearch(event.target.value);
    }

    const filtered_products = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));


    const inputRef = useRef();

    const onKeyHandler = event => {
        if (event.keyCode === 70) {
            inputRef.current.children[1].children[0].focus();
        }
    }


    useEffect(() => {
        if (!products.length) dispatch(loadProducts());
    }, [products.length, dispatch]);

    return (
        <>
            {
                loading ?
                    <Loading />
                    :
                    <>
                        <Grid container className={classes.container} onKeyDown={onKeyHandler}>
                            <Grid item xs={12} className={classes.searchWrapper}>
                                <TextField ref={inputRef} id="outlined-basic" label="Search(F)" variant="outlined" onChange={searchHandler} />
                            </Grid>
                            {
                                filtered_products.map(item => {
                                    return <Grid item sm={6} md={4} lg={3} key={item.id}>
                                        <Product
                                            id={item.id}
                                            data={item}
                                        />
                                    </Grid>
                                })
                            }
                        </Grid>
                    </>

            }
        </>
    );
}

export default ProductsView;