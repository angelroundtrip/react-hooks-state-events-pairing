import video from "../data/video.js";
import VideoSection from "./VideoSection.js";
import {useState} from 'react'


function App() {

  const [data, setData]= useState(video)

  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoSection title={data.title} embedUrl={data.embedUrl} views={data.views} createdAt={data.createdAt}/>
    </div>
  );
}

export default App;
