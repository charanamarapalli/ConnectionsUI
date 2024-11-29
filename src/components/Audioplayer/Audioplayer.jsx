import React, { useEffect, useRef, useState } from "react";
import "./Audioplayer.css";
const Audioplayer = ({ audioSrc }) => {
  //state variables to manage player's status and current time
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null); // to store reference of an element and state used for value
  //useref - dom element does not rerender on manipulating.
  //use state -dom element does render again.
  //use state - can create any initial value
  //use ref - returns a mutable ref object  whose .current value that we can access and can modify it.

  //function to seek to a specific time
  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  //function to update the current time and duration of audio
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  //functionto playing the audio
  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  //function to handle pausing the audio
  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  //function to toggle  play and pause
  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  // //use an effect to listen for 'time update' events from the audio element and updte
  // useEffect(()=>{
  //   audioRef.current.addEventListener("timeUpdate", handleTimeUpdate);

  //   //clean up the event istener when component unmounts
  //   return ()=>{
  //     audioRef.current.removeEventListener("timeUpdate", handleTimeUpdate);
  //   };
  // }, []);

  useEffect(() => {
    const currentVal = audioRef.current;
    currentVal.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      currentVal.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  function formattedTime(time){
     const seconds = Math.floor(time%60);
     const minutes = Math.floor(time/60);
     const formattedSeconds = seconds.toString().padStart(2,"0");
     return `${minutes}:${seconds}`
  }

  return (
    <div className="player-card">
      <img src="/assets/images/18.JPG" alt="Cover image" />

      {/* input range for seeking within the audio track */}
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
      />

      {/* audio element for playing the audio */}
      <audio ref={audioRef} src={audioSrc} />

      {/* display current duration and total duration of track */}
      <div className="track-duration">
        <h6 className="pd-2">{formattedTime(currentTime)}</h6>
        {/* play/pause button */}
        <button className="play-button" onClick={handlePlayPause}>
          <span className="materials-symbols-rounded">
            {isPlaying ? "pause" : "play_arrow"}
          </span>
        </button>
        <h6>{formattedTime(duration)}</h6>
      </div>
    </div>
  );
};

export default Audioplayer;
