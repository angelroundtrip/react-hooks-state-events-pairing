import React from 'react';


function VideoSection({title, embedUrl, views, createdAt}) {
  return (
  <div>
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />

      <h1>{title}</h1>

      <h3>{views} Views | Uploaded {createdAt}</h3>

    

  </div>
  );
}

export default VideoSection;
