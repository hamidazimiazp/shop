import React, { useEffect } from 'react';
import configureStore from "./redux/store/store";
import { Provider } from 'react-redux';


const store = configureStore();

function App() {

  return (
    <Provider store={store}>
      Component
    </Provider>
  );
}

export default App;
