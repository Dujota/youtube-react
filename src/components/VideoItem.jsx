import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const { title, thumbnails } = video.snippet;
  return (
    <div
      className="video-item item"
      // must have arrow function here to make the onlclick work for the specific video clicked. its callback that calls a callback
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img className="ui image" src={thumbnails.medium.url} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
