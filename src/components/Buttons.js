import React, {useState} from 'react';

function Buttons({upvotes, downvotes}) {
                             // useState(defaultValue)
  const [upNumber, setUpNumber]= useState(upvotes) 
  const [downNumber, setDownNumber]= useState(downvotes) 

    function handleUpClick() {
      setUpNumber((upvotes) => upvotes + 1)
    }

    function handleDownClick() {
      setDownNumber((downvotes) => downvotes + 1)
    }

    return (
      <p>
        <button onClick={handleUpClick}> {upNumber} 👍 </button> 
        <button onClick={handleDownClick}> {downNumber} 👎 </button>
      </p>
    );
}

export default Buttons;
