import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./components/redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
      <BrowserRouter>
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} /></BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
store.subscriber(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
