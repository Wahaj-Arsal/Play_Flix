/** @format */

import React from "react";

const Aside = (props) => {
  // console.log("Props: ", props);

  return [
    <div className="aside">
      <div className="aside-img"></div>
      {/* Use JS function to move the broken img icon to the background?? */}
      <img
        src={props.image}
        className="aside-img__img"
        onClick={props.onClick}
        id={props.id}
      />
      <div className="aside-details">
        <h2 className="aside-details__title">{props.title}</h2>
        <p className="aside-details__channel">{props.channel}</p>
      </div>
    </div>,
  ];
};
export default Aside;
