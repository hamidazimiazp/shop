import React, { useEffect } from 'react';
import configureStore from "./redux/store/store";
import * as productsActions from "./redux/particles/products";
import { Provider } from 'react';


const store = configureStore();

function App() {

  return (
    <Provider store={store}>
      Component
    </Provider>
  );
}

export default App;
