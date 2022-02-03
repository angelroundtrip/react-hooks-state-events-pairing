import video from "../data/video.js";
import VideoSection from "./VideoSection";
import {useState} from 'react'
import Buttons from "./Buttons";
import Comments from "./Comments"


function App() {

  const [showComments, setShowComments] = useState(true)

  function deleteComments(){
    showComments(!setShowComments)
  }

  const [data, setData]= useState(video) 
  
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoSection title={data.title} embedUrl={data.embedUrl} views={data.views} createdAt={data.createdAt}/>
      <Buttons upvotes={data.upvotes} downvotes={data.downvotes}/>
      
      <button onClick={deleteComments}>{deleteComments ? 'Hide' : 'Show'} Comments</button>

      <hr/>

      {deleteComments && <Comments comments={data.comments}/> }

    </div>
  );
}

export default App;
