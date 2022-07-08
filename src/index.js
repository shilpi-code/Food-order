import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/InitialState";
import reducer from "./context/reducer";
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
  <App />
</StateProvider>
  </Router>,
    document.getElementById("root")
  );