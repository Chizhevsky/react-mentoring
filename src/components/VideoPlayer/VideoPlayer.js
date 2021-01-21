import React from "react";

export default function VideoPlayer({width, height, source}) {
  return (
    <iframe
      title="top-film-title"
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${source}?autoplay=1&mute=1`}
    ></iframe>
  );
}
