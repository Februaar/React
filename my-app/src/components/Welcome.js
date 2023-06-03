import React from "react";
import taek from "../images/taek.jpg";

export default function Welcome({ withImg, firstName, lastName }) {
  // image + Hello, firstName, lastName
  return (
    <>
      {withImg && <img src={taek} alt="welcometaek" width="400" height="450" />}
      <div>Hello!</div>
      <div>
        <span>{firstName}</span>
        {lastName}
      </div>
    </>
  );
}
