import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [
  { message: "Hi, how are you?", id: 1, likesCount: 11 },
  { message: "It's my first post.", id: 2, likesCount: 12 },
  { message: "GG's", id: 2, likesCount: 55 },
  { message: "gege", id: 2, likesCount: 120 },
];

let messagesData = [
  { id: 1, message: '"HI, how are you?"' },
  { id: 2, message: "I'm fine" },
  { id: 3, message: "Yo" },
];

let dialogsData = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Valera" },
  { id: 3, name: "Andrey" },
  { id: 4, name: "Sash" },
  { id: 5, name: "Vika" },
  { id: 6, name: "Yura" },
];

ReactDOM.render(
  <App posts={posts} messages={messagesData} dialogs={dialogsData} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
