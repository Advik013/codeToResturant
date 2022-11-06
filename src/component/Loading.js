import React, { useEffect, useState } from "react";

const Loading = () => {
  let [display, setdisplay] = useState("block");
  useEffect(() => {
    if (display.match("block")) {
      document
        .querySelector(".scrollable")
        .addEventListener("wheel", preventScroll, { passive: false });

      function preventScroll(e) {
        e.preventDefault();
        e.stopPropagation();

        return false;
      }
      setTimeout(() => {
        setdisplay("none");
      }, 3000);
    } else {
      document
        .querySelector(".scrollable")
        .addEventListener("wheel", preventScroll, { passive: false });

      function preventScroll(e) {
        e.preventDefault();
        e.stopPropagation();
 
        return true; 
      }
    }
  }, [display]);

  return (
    <div style={{ display: display }} className="scrollable">
      <div className="video-container">
        {/* <img   src=''/> */}
        <img src="./image/Biryani.jpg" className="loader glow" alt="" />
      </div>
    </div>
  );
};

export default Loading;
