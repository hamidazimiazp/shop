import React, { useEffect } from 'react';
import configureStore from "./redux/store/store";
import { Provider } from 'react-redux';
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeView from './container/Home';
import ProductsView from './container/Products';

const store = configureStore();

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/products/' element={<ProductsView />} />
        <Route path='/' element={<HomeView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Provider>
  );
}

export default App;
