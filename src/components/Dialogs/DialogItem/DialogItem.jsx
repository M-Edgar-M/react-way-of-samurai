import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "dialog/" + props.id;
  let dialoMessageElement = React.createRef();

  let addNewMessage = (text) => {
   text = dialoMessageElement.current.value;
   props.addNewMessage(text);
  };

  let updateMessage = (updateText) => {
    // dialoMessageElement.current.value = updateText;
    props.updateMessage(updateText);
  };

  return (
    <div className={`${s.dialog} ${s.active}`}>
      <div className={s.dialog}>
        <img
          src="https://images.pexels.com/photos/4052809/pexels-photo-4052809.jpeg?cs=srgb&dl=pexels-mati-mango-4052809.jpg&fm=jpg"
          alt="Image"
        />
      </div>
      <NavLink to={path}>{props.name}</NavLink>

      <textarea ref={dialoMessageElement} name="textArea" cols="8" rows="2" placeholder="Type some text here" onChange={updateMessage} />
      <button onClick={addNewMessage}>Submit</button>
    </div>


  );
};

export default DialogItem;
