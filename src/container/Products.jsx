import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../redux/particles/products';


const ProductsView = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.entities.products.list)

    useEffect(() => {
        dispatch(loadProducts());
    }, []);


    return (
        <>
            <h1>Products</h1>
            <ul>
                {
                    products.map(item => {
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
        </>
    );
}

export default ProductsView;