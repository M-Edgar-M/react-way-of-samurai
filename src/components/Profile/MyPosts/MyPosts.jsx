import React from "react";
import { dispatch } from "../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let addPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };

  let onPostChange = (text) => {
    text = addPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST', text});

  };

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <textarea value={props.newPostText} onChange={onPostChange}
          ref={addPostElement}
          placeholder="Type some text here"
          maxLength="35"
         />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
        {/* <Post
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likesCount={postData[1].likesCount}
        /> */}
      </div>
    </div>
  );
};

export default MyPosts;
