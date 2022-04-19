import React, { useEffect } from 'react';
import configureStore from "./redux/store/store";
import { Provider } from 'react-redux';
import Navbar from "./components/Navbar";

const store = configureStore();

function App() {

  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
}

export default App;
