import React, { useState, useRef } from "react";
import "../../styles/index.css";
import "./testimonials.css";
import { FaPlay, FaPause } from "react-icons/fa";

const Accordian = (props) => {
  const [showVideo, setShowVideo] = useState(false);
  const [focus, setFocus] = useState(true);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef(null);

  return (
    <div className="video-section">
      <div className="title-wrapper">
        <div>
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>
        <button onClick={() => setShowVideo(!showVideo)}>
          Watch
          <FaPlay
            style={{ margin: "auto", marginTop: "5", marginLeft: "5px" }}
            size={15}
          />
        </button>
      </div>
      {showVideo && (
        <div>
          {props.youtube ? (
            <iframe
              width="100%"
              style={{ marginTop: "15px" }}
              src={props.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="iframe-video-section"
            ></iframe>
          ) : (
            <div
              className="video-player-div"
              onMouseOver={(e) => {
                setFocus(true);
              }}
              onMouseOut={() => setFocus(false)}
            >
              <div
                className="video-icons"
                style={{
                  position: "absolute",
                  width: "100%",
                  opacity: 0.8,
                  display: focus ? "flex" : "none",
                  justifyContent: "center",
                  alignItems: "center",
                  top: "50%",
                  marginTop: "-40px",
                }}
              >
                {playing ? (
                  <FaPlay style={{ color: "white" }} size={60} />
                ) : (
                  <FaPause style={{ color: "white" }} size={60} />
                )}
              </div>
              <video
                ref={videoRef}
                onTouchStart={() => {
                  if (playing) {
                    videoRef.current.play();
                  } else {
                    videoRef.current.pause();
                  }
                }}
                onPause={() => {
                  setPlaying(true);
                }}
                onPlay={() => {
                  setPlaying(false);
                }}
                controls
                poster={
                  "https://media.opzoom.com/app.opzoom.com/testimonials/media/" +
                  props.cover
                }
              >
                <source
                  src={`https://media.opzoom.com/app.opzoom.com/testimonials/media/${props.video}`}
                />
              </video>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordian;
