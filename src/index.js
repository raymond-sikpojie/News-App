import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "./components/Context";
//import App from "./Components"
ReactDOM.render(
  <App />,
  document.getElementById("root")
  // <Provider>
  //   <App />
  // </Provider>,
  // document.getElementById("root")
);
