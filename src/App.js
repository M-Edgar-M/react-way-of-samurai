import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";

import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  

  // console.log(d.toLocaleString('ru-RU', {
  //   timeZone: "America/New_York"
  // }));
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/messages"
            render={() => (
              <Dialogs dispatch={props.dispatch}
                state={props.state.dialogsPage}
                
              />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} />}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/music" render={() => <Music />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

//Adding some comment
