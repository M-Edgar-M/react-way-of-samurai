const profilePageReducer = (state, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 11,
      };

      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case "UPDATE-NEW-POST":
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }

  // if (action.type === "ADD-POST") {
  //   let newPost = {
  //     id: 5,
  //     message: state.newPostText,
  //     likesCount: 11,
  //   };

  //   state.posts.push(newPost);
  //   state.newPostText = "";

  // } else if (action.type === "UPDATE-NEW-POST") {
  //   state.newPostText = action.newText;

  // }
  // return state;
};

export const addPostActionCriator = () => {
  return {
    type: "ADD-POST",
  };
};

export const updateNewPostActionCriator = (text) => {
  return {
    type: "UPDATE-NEW-POST",
    newText: text,
  };
};
export default profilePageReducer;
