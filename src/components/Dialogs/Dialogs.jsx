import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "dialog/" + props.id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Valera" id="2" />
        <DialogItem name="Andrey" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Vika" id="5" />
        <dialogItems name="Yura" id="6" />
      </div>

      <div className={s.messages}>
        <Message message="HI, how are you?" />
        <Message message="I'm fine" />
        <Message message="Yo" />
      </div>
    </div>
  );
};

export default Dialogs;
