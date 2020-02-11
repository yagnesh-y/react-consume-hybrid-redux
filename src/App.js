import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Test from "./Test";
import store from "hybrid-shared-redux";
import { Provider } from "react-redux";

function App() {
  // useEffect(() => {
  //   getProfile();
  // }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Test />
        </header>
      </div>
    </Provider>
  );
}

export default App;
