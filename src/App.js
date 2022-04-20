import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from './container/Home';
import ProductsView from './container/Products';
import ProductDetail from './container/ProductDetail';
import { useDispatch } from 'react-redux';
import { loadProducts } from './redux/particles/products';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <>
      <Navbar />
      <>
        <Routes>
          <Route path='/products/product/:id' element={<ProductDetail />} />
          <Route path='/products/' element={<ProductsView />} />
          <Route path='/' element={<HomeView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </>
  );
}

export default App;
