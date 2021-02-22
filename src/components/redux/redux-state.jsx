import { combineReducers, createStore } from "redux";
import profilePageReducer from './profile_page_reducer';
import dialogsPageReducer from './dialogs_page_reducer';


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer
})

let store = createStore(reducers);


export default store;