// let State = {
//   id: ID,
//   message: newMessage
// }
import profilePageReducer from "./profile_page_reducer";
import dialogsPageReducer from "./dialogs_page_reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hi, how are you?", id: 1, likesCount: 11 },
        { message: "It's my first post.", id: 2, likesCount: 12 },
        { message: "GG's", id: 3, likesCount: 55 },
        { message: "gege", id: 4, likesCount: 120 },
      ],

      newPostText: "It_kamasutra",
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

      newMessageText: "",
    },
  },
  _rerenderEntireTree() {
    
  },
  getState() {
    return this._state;
  },

  subscriber(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    debugger;
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );
    this._state.dialogsPage = dialogsPageReducer(
      this._state.dialogsPage,
      action
    );
    this._rerenderEntireTree(this._state);
  },
};

export default store;
