import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div>
      My posts {props.count}
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post massage="Hi, how are you?" />
        <Post massage="It's my first post." />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )

}

export default MyPosts;