/** @format */

import "./Video.scss";
import { Link } from "react-router-dom";
import newPicture from "../../assets/Images/Upload-video-preview.jpg";

const Video = ({ video }) => {
  // console.log(video);
  return (
    <div className="aside__tile">
      <div className="aside__background">
        {/* Use JS function to move the broken img icon to the background?? */}
        <Link to={`/video/${video.id}`} key={video.id} className="aside__link">
          <img
            src={video.image}
            className="aside__img"
            id={video.id}
            alt={video.title}
          />
        </Link>
      </div>
      <div className="aside-details">
        <h3 className="aside-details__title">{video.title}</h3>
        <p className="aside-details__channel">{video.channel}</p>
      </div>
    </div>
  );
};

export default Video;
