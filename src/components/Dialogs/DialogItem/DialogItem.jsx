import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "dialog/" + props.id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <div className={s.dialog}>
        <img
          src="https://images.pexels.com/photos/4052809/pexels-photo-4052809.jpeg?cs=srgb&dl=pexels-mati-mango-4052809.jpg&fm=jpg"
          alt="Image"
        />
      </div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
