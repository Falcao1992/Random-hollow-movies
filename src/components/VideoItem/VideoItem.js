import React from 'react';
import './VideoItem.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={() => handleVideoSelect(video)} className=' videoItem'>
            
            <div className='video-item__content'>
                <div className='video-item__header '>{video.snippet.title}</div>
            </div>
            <img className='VideoItem__ui_image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
        </div>
    )
};
export default VideoItem;