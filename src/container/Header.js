import React from "react";
import video from "../assets/video.mp4";

function Header() {
  return (
    <div>
      <div>
        <div className="video">
          <video src={video} autoPlay loop muted />
        </div>
      </div>
    </div>
  );
}

export default Header;
