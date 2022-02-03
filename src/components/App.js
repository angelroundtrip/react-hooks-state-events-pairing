import video from "../data/video.js";
import VideoSection from "./VideoSection.js";
import {useState} from 'react'
import Buttons from "./Buttons.js";


function App() {

  const [data, setData]= useState(video) 
  
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoSection title={data.title} embedUrl={data.embedUrl} views={data.views} createdAt={data.createdAt}/>
      <Buttons upvotes={data.upvotes} downvotes={data.downvotes}/>
    </div>
  );
}

export default App;
