import video from "../data/video.js";
import VideoSection from "./VideoSection";
import {useState} from 'react'
import Buttons from "./Buttons";
import Comments from "./Comments"


function App() {

  const [data, setData]= useState(video) 
  const [showComments, setShowComments] = useState(true)

  const deleteComments = () => {
		setShowComments(!showComments)
	}

  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoSection title={data.title} embedUrl={data.embedUrl} views={data.views} createdAt={data.createdAt}/>

      <Buttons upvotes={data.upvotes} downvotes={data.downvotes}/>
      
      <button onClick={deleteComments}>{showComments ? 'Hide' : 'Show'} Comments</button>

      <hr/>

      {showComments && <Comments comments={data.comments}/> }

    </div>
  );
}

export default App;
