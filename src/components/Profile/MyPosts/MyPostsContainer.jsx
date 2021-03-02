import React from "react";
import {
  addPostActionCriator,
  updateNewPostActionCriator,
} from "../../redux/profile_page_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCriator());
  };

  let onPostChange = (text) => {
    //text = addPostElement.current.value;
    props.dispatch(updateNewPostActionCriator(text));
  };

  return (<MyPosts onNewPostChange={onPostChange} onAddNewPost={addPost} state={props.state} />)
};

export default MyPostsContainer;
