import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Products from "./components/Products";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Products />
      </div>
    </Provider>
  );
}

export default App;
