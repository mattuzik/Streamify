import { useRef, useState } from "react";
import video from '/videos/Example.mp4'
import poster from '/4.jpg'

const VideoPlayer = () => {
  const videoElement = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoElement.current) {
      if (isPlaying) {
        videoElement.current.pause();
      } else {
        videoElement.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-player">
      <video 
        ref={videoElement}
        src={video}
        poster={poster}
        className="video-player__video"
        width="917" 
        height="412"
        onClick={togglePlay}
      />

      {!isPlaying && (
        <div className="video-player__panel video-player__panel--center is-active">
          <button 
            className="video-player__play-button" 
            type="button" 
            aria-label="play" 
            onClick={togglePlay}
          >
            <svg width="40" height="40" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.4375 0C44.1431 0 56.875 12.7319 56.875 28.4375C56.875 44.1431 44.1431 56.875 28.4375 56.875C12.7319 56.875 0 44.1431 0 28.4375C0 12.7319 12.7319 0 28.4375 0ZM24.5625 16.4902C22.3755 15.2752 19.6875 16.8575 19.6875 19.3594V37.5166C19.6878 40.0183 22.3756 41.5997 24.5625 40.3848L40.9043 31.3057C43.154 30.0554 43.1541 26.8196 40.9043 25.5693L24.5625 16.4902Z" fill="white"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer