import React, { useState } from "react";
import Banner from "./pages/banner.jsx";
import Features from "./pages/features.jsx";
import "./app.css";
import { Button } from "antd";

export default function App() {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const btnToggle = toggle ? "hi,buddy" : "what's up";
  return (
    <div>
      <Button type="primary" onClick={handleClick}>
        {btnToggle}
      </Button>
      <Banner />
      <Features />
    </div>
  );
}
