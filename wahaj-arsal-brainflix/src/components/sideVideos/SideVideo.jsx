/** @format */

import React from "react";
import Videos from "../video/Video";

export default function AsideVideo({ videos, handleChange }) {
  // console.log("Props: ", props);
  const asideMarkup = videos.map((video) => {
    return <Videos key={video.id} video={video} onClick={handleChange} />;
  });
  return (
    <aside className="aside">
      <h2 className="aside__title">next videos</h2>
      {asideMarkup}
    </aside>
  );
}
// export default Aside;
