let initialState = {
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
}

const dialogsPageReducer = (state = initialState, action) => {
  let stateCopy = {...state};
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
    
    stateCopy.messagesData = [...state.messagesData];
    stateCopy.messagesData.push(newMessage);
  }
  return stateCopy;
};

export default dialogsPageReducer;
