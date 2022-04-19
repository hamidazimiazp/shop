import React, { useEffect } from 'react';
import configureStore from "./redux/store/store";
import * as productsActions from "./redux/particles/products";


function App() {
  const store = configureStore();


  store.subscribe(() => {
    console.log("state change =>", store.getState());
  });

  store.dispatch(productsActions.loadProducts());


  // useEffect(() => {
  //   console.log(store.getState());
  // }, [store]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
