/** @format */

import "./Video.scss";

const Video = ({ video, onClick }) => {
  return (
    <div key={video.id} className="aside__tile">
      <div className="aside__background">
        {/* Use JS function to move the broken img icon to the background?? */}
        <img
          src={video.image}
          className="aside__img"
          onClick={onClick}
          id={video.id}
        />
      </div>
      <div className="aside-details">
        <h3 className="aside-details__title">{video.title}</h3>
        <p className="aside-details__channel">{video.channel}</p>
      </div>
    </div>
  );
};

export default Video;
