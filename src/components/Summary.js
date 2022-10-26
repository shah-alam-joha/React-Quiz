import { useMemo } from "react";
import successImage from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import classes from "../styles/Summary.module.css";

export default function Summary({ score, noq }) {
  
  const getKeyword = useMemo(() => {
    console.log('summary');
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if((score / (noq * 5)) * 100 < 75){
      return "good";
    }
    else if((score / (noq * 5)) * 100 < 100){
      return "very good";
    }else{
      return "excellent";
    }
  },[score, noq]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );
const image = result ? result.photos[0].src.medium : successImage;
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div>Your result is loading...</div>}
      {error && <div>An error is occured!</div>}
      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt="Success" style={{borderRadius: "50px"}} />
        </div>
      )}
    </div>
  );
}
