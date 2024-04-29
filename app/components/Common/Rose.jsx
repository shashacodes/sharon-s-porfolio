import React, { useState } from "react";
import "./styles.css";

export default function BloomingFlower() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={`flower ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="vase">
        <div className="flower">
          <div className="f-wrapper">
            <div className="flower__line"></div>
            <div className="f">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__leaf flower__leaf--5"></div>
              <div className="flower__leaf flower__leaf--6"></div>
              <div className="flower__leaf flower__leaf--7"></div>
              <div className="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
            </div>
          </div>

          <div className="f-wrapper f-wrapper--2">
            <div className="flower__line"></div>
            <div className="f">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__leaf flower__leaf--5"></div>
              <div className="flower__leaf flower__leaf--6"></div>
              <div className="flower__leaf flower__leaf--7"></div>
              <div className="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
            </div>
          </div>

          <div className="f-wrapper f-wrapper--3">
            <div className="flower__line"></div>
            <div className="f">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__leaf flower__leaf--5"></div>
              <div className="flower__leaf flower__leaf--6"></div>
              <div className="flower__leaf flower__leaf--7"></div>
              <div className="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
            </div>
          </div>
          <div className="flower__glass"></div>
        </div>
      </div>
    </div>
  );
}
