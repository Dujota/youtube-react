import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  // first map over the array result and then save it to a variable
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  // Then we render to the page by passing the variable result to the return statement
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
