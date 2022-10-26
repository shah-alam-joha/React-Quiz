import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer({ id, title }) {
  const [status, setStatus] = useState(false);
  const buttonRef = useRef();
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined  ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
      //ei class on korle problem hocche
        // className={classes.player}
        url={videoUrl}
        playing={status}
        width="300px"
        height="168px"
        controls
      />
      <p>{title}</p>
    </div>
  );
}
