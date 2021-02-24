let initialState = {
  profilePage: {
    posts: [
      { message: "Hi, how are you?", id: 1, likesCount: 11 },
      { message: "It's my first post.", id: 2, likesCount: 12 },
      { message: "GG's", id: 3, likesCount: 55 },
      { message: "gege", id: 4, likesCount: 120 },
    ],

    newPostText: "It_kamasutra",
  },
}

const profilePageReducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD-POST": {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 11,
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case "UPDATE-NEW-POST": {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
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
