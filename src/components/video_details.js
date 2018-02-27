import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const title = video.snippet.title;
    const description = video.snippet.description;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item" />
            </div>
            <div className="details">
                <div><strong>{title}</strong></div>
                <div>{description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;