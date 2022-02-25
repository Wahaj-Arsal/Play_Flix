/** @format */

import React from "react";
import Videos from "../video/videos";

export default function AsideVideo({ videos, handleChange }) {
  // console.log("Props: ", props);
  const asideMarkup = videos.map((video) => {
    return <Videos key={video.id} video={video} onClick={handleChange} />;
  });
  return <>{asideMarkup}</>;
}
// export default Aside;
