import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {
  let dialogs = props.state.dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} dispatch={props.dispatch}/>
  ));
  let messages = props.state.messagesData.map((m) => (
    <>
    <p>{m?.name}</p>
    <img style={{width: '100px', height: '100px'}} src={m?.img}></img>
    <Message message={m.message} id={m.id} />
    </>
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogs}
        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <dialogItems name={dialogsData[5].name} id={dialogsData[5].id} /> */}
      </div>

      <div className={s.messages}>
        {messages}
        {/* <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
        <Message message={messagesData[2].message} id={messagesData[2].id} /> */}
      </div>
    </div>
  );
};

export default Dialogs;
