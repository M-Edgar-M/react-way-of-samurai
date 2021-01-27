import ReactDOM from "react-dom";
import App from "./App";
import { addPost } from "./components/redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} />, document.getElementById("root"));
};