import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/messages" activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <a href="/news">News</a>
      </div>
      <div className={s.item}>
        <a href="/music">Music</a>
      </div>
      <div className={s.item}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;









{/* <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink>Dimich</NavLink>
        </div>


        <div className={s.dialog}>Sveta</div>

        <div className={s.dialog}>Sasha</div>

        <div className={s.dialog}>Victor</div>

        <div className={s.dialog}>Valera</div>
      <div className={s.messages}>
        <div className={s.messages}>Hi</div>
        <div className={s.messages}>It-Kamasutra</div>
        <div className={s.messages}>My React course</div>
      </div> */}