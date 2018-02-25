import React from 'react';

const VideoDetail = (props) => {
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const title = video.snippet.title;
    const description = video.snippet.description;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" />
            </div>
            <div className="details">
                <div>title</div>
                <div>description</div>
            </div>
        </div>
    );
}