import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";
import DialogItem from "./DialogItem";


const DialogItemContainer = (props) => {

  let path = "dialog/" + props.id;

  let addNewMessage = (text) => {
   //text = dialoMessageElement.current.value;
   if(text != '') {
    props.dispatch({type: 'ADD-NEW-MASSAGE', 
    text, 
    name: props.name, 
    img: 'https://images.pexels.com/photos/4052809/pexels-photo-4052809.jpeg?cs=srgb&dl=pexels-mati-mango-4052809.jpg&fm=jpg'});
   } else {
     return false;
   }

  };

  // let updateMessage = (el) => {
  //   //text = dialoMessageElement.current.value;
  //   //dialoMessageElement.current.value = text;
  //   let text = el.target.value;
  //   setText(text);
  //   //console.log(text);
  //   // props.dispatch({type: 'UPDATE-MESSAGE', text});
  // };


  return (<DialogItem onAddNewMessage={addNewMessage} />);
};

export default DialogItemContainer;
