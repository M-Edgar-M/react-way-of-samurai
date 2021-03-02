import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";


const DialogItem = (props) => {

  let path = "dialog/" + props.id;
  let dialoMessageElement = React.createRef();
  const [text, setText] = useState('');

  let addNewMessage = () => {
   //text = dialoMessageElement.current.value;
   if(text != '') {
     props.onAddNewMessage(text);
    // props.dispatch({type: 'ADD-NEW-MASSAGE', 
    // text, 
    // name: props.name, 
    // img: 'https://images.pexels.com/photos/4052809/pexels-photo-4052809.jpeg?cs=srgb&dl=pexels-mati-mango-4052809.jpg&fm=jpg'});
    setText('')
   } else {
     return false;
   }

  };

  let updateMessage = (el) => {
    //text = dialoMessageElement.current.value;
    //dialoMessageElement.current.value = text;
    let text = el.target.value;
    setText(text);
    //console.log(text);
    // props.dispatch({type: 'UPDATE-MESSAGE', text});
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

      <textarea ref={dialoMessageElement} value={text} name="textArea" cols="8" rows="2" placeholder="Type some text here" onChange={updateMessage} />
      <button onClick={addNewMessage}>Submit</button>
    </div>


  );
};

export default DialogItem;
