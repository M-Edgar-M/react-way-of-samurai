const dialogsPageReducer = (state, action) => {
  // switch (action.type) {
  //   case "ADD-NEW-MESSAGE":
  //     let newMessage = {
  //       id: 4,
  //       message: action.text,
  //       name: action.name,
  //       img: action.img,
  //     };
  //     state.messagesData.push(newMessage);
  //     return state;
  //   default:
  //     return state;
  // }

  if (action.type === "ADD-NEW-MASSAGE") {
    let newMessage = {
      id: 4,
      message: action.text,
      name: action.name,
      img: action.img,
    };
    state.messagesData.push(newMessage);
  }
  return state;
};

export default dialogsPageReducer;
