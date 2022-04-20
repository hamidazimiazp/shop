import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from './container/Home';
import ProductsView from './container/Products';
import ProductDetail from './container/ProductDetail';
import { Provider } from 'react-redux';
import configureStore from "./redux/store/store";

function App() {

  const store = configureStore();

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <>
          <Routes>
            <Route path='/products/product/:id' element={<ProductDetail />} />
            <Route path='/products/' element={<ProductsView />} />
            <Route path='/' element={<HomeView />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      </Provider>
    </>
  );
}

export default App;
