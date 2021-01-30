import "./index.css";
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updateNewPost, updateMessage, addNewMessage, subscriber } from './components/redux/state';
import * as serviceWorker from "./serviceWorker";
import state from "./components/redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPost={updateNewPost} addNewMessage={addNewMessage} updateMessage={updateMessage} />, document.getElementById("root"));
};

rerenderEntireTree(state);

subscriber(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
