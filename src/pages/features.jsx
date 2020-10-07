import React from "react";
import starwar from "../assets/imgs/starwar.jpeg";
import notfound from "../assets/imgs/not_found_404.jpg";
import "../assets/css/features.css";

export default function Features() {
  return (
    <div id="features">
      <h3>this is features</h3>
      <img src={starwar} alt="starwar" />
      <img src={notfound} alt="not found" />
    </div>
  );
}
