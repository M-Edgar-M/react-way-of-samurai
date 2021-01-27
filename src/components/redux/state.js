import { rerenderEntireTree } from "../../render";


let state = {
  profilePage: {
    posts: [
      { message: "Hi, how are you?", id: 1, likesCount: 11 },
      { message: "It's my first post.", id: 2, likesCount: 12 },
      { message: "GG's", id: 3, likesCount: 55 },
      { message: "gege", id: 4, likesCount: 120 },
    ],
  },

  dialogsPage: {
    messagesData: [
      { id: 1, message: '"HI, how are you?"' },
      { id: 2, message: "I'm fine" },
      { id: 3, message: "Yo" },
    ],
    dialogsData: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Valera" },
      { id: 3, name: "Andrey" },
      { id: 4, name: "Sash" },
      { id: 5, name: "Vika" },
      { id: 6, name: "Yura" },
    ],
  },
};
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 11,
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
