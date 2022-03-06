/** @format */

import React from "react";
import Videos from "../video/Video";
import { Link } from "react-router-dom";

export default function AsideVideo({ videos, currentVideo }) {
  // console.log("Props: ", props);
  // console.log("VIDEOS");
  // console.log(videos);

  const filteredVideos = videos.filter((video) => video.id !== currentVideo);
  // console.log(filteredVideos);

  const asideMarkup = filteredVideos.map((video) => {
    return (
      // <Link to={`/video/${video.id}`} key={video.id} className="side__videos">
      <Videos video={video} key={video.id} />
      // </Link>
    );
  });
  return (
    <aside className="aside">
      <h2 className="aside__title">next videos</h2>
      {asideMarkup}
    </aside>
  );
}
// export default Aside;
