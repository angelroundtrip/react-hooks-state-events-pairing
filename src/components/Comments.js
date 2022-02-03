import OneComment from "./OneComment"


function Comments({comments}) {
  // console.log(comments)

  return (
    <div>
      
      <h2>{comments.length} Comments</h2>

      {comments.map(comment => <OneComment comment={comment} />) } 
   
    </div>
  );
}

export default Comments;
