/** @format */

const Video = ({ video, onClick }) => {
  return (
    <div key={video.id} className="aside">
      <div className="aside-img"></div>
      {/* Use JS function to move the broken img icon to the background?? */}
      <img
        src={video.image}
        className="aside-img__img"
        onClick={onClick}
        id={video.id}
      />
      <div className="aside-details">
        <h2 className="aside-details__title">{video.title}</h2>
        <p className="aside-details__channel">{video.channel}</p>
      </div>
    </div>
  );
};

export default Video;
