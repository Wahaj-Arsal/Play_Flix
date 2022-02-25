/** @format */

import React from "react";
import Hero from "../hero/Hero";
import Aside from "../aside/Aside";

export default function Main({ details, videos, handleChange }) {
  // videos.shift(); //removes the first item in the array
  const asideMarkup = videos.map((videos) => {
    return (
      <Aside
        key={videos.id}
        id={videos.id}
        title={videos.title}
        channel={videos.channel}
        image={videos.image}
        onClick={handleChange}
      />
    );
  });

  return (
    <>
      <Hero
        key={details.id}
        image={details.image}
        title={details.title}
        artist={details.artist}
        timestamp={details.timestamp}
        views={details.likes}
        description={details.description}
        video={details.video}
      />
      {asideMarkup}
    </>
  );
}
