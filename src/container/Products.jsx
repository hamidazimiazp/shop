import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { loadProducts } from '../redux/particles/products';


const ProductsView = () => {

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
                    <ul>
                        {
                            products.map(item => {
                                return <li key={item.id}>{item.title}</li>
                            })
                        }
                    </ul>
            }
        </>
    );
}

export default ProductsView;