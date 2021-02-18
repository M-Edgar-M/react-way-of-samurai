import "./index.css";
import ReactDOM from 'react-dom';
import App from './App';
import { dispatch, updateNewPost, updateMessage, addNewMessage, subscriber } from './components/redux/state';
import * as serviceWorker from "./serviceWorker";
import store from "./components/redux/state";


let rerenderEntireTree = () => {
    ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch.bind(store)} addNewMessage={store.addNewMessage.bind(store)} updateMessage={store.updateMessage.bind(store)} />, document.getElementById("root"));
};

rerenderEntireTree();

store.subscriber(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
