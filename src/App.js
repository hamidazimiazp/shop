import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from './container/Home';
import { Provider } from 'react-redux';
import configureStore from "./redux/store/store";
import Cart from './container/Cart';
import ProductDetailView from './container/ProductDetail';
import ProductsView from "./container/Products";


const App = () => {

  const store = configureStore();

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <>
          <Routes>
            <Route path='/products/product/:id' element={<ProductDetailView />} />
            <Route path='/products/' element={<ProductsView />} />
            <Route path='/cart/' element={<Cart />} />
            <Route path='/' element={<HomeView />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      </Provider>
    </>
  );
}

export default App;
