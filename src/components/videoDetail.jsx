import React from 'react';

const VideoDetail = (props) => {
  if(!props.video) {
    return (<div>Loading...</div>);
  } else {
    const title = props.video.snippet.title;
    const description = props.video.snippet.description;
    const videoId = props.video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{title}</div>
          <div>{description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
