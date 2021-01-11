import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postData = [
    { message: "Hi, how are you?", id: 1, likesCount: 11 },
    { message: "It's my first post.", id: 2, likesCount: 12 },
  ];
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <textarea placeholder='Type some text here' maxLength='35'></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likesCount={postData[1].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
