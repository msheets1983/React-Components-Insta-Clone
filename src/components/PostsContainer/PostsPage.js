//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 

const PostsPage = (props) => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {props.dummyData.map(value =>{
        return <Post post = {value} />
      })}
    </div>
  );
};

export default PostsPage;
