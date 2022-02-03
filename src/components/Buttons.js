import React, {useState} from 'react';
import video from "../data/video.js";


function Buttons({upvotes, downvotes}) {
  const [click, setClick]= useState(video) 
  function handleUpClick() {
    setClick((upvotes) => upvotes + 1)
  }
  return (
  <div>
    <button onClick={handleUpClick}>{upvotes} 👍</button> 
    <button>{downvotes} 👎</button>
  </div>
  );
}

export default Buttons;
