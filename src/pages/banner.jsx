import React from "react";
import banner from "../assets/imgs/rider.jpg";
import "../assets/css/banner.less";

export default function Banner() {
  return (
    <div id="banner">
      <h2>awesome rider</h2>
      <img src={banner} alt="" />
    </div>
  );
}
