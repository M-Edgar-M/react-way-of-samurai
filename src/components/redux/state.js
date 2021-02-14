// let State = {
//   id: ID,
//   message: newMessage
// }

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
    },
  },
  _rerenderEntireTree() {
    console.log("something");
  },
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 11,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },

  updateNewPost(text) {
    this._state.profilePage.newPostText = text;
    this._rerenderEntireTree(this._state);
  },
  addNewMessage(text) {
    let newMessage = {
      id: 4,
      message: text,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._rerenderEntireTree(this._state);
  },
  updateMessage(text) {
    this._state.dialogsPage.messagesData.message = text;
    this._rerenderEntireTree(this._state);
  },
  subscriber(observer) {
    this._rerenderEntireTree = observer;
  },
};

export default store;
