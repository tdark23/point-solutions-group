import React from "react";
import "./../../styles/components/branding.css";
import axd from "./../../assets/images/axd.png";
import figma from "./../../assets/images/figma.png";
import insta from "./../../assets/images/insta.png";
import photoshop from "./../../assets/images/ps.png";
import vscode from "./../../assets/images/vscode.png";
import youtube from "./../../assets/images/youtube.png";

const Branding = () => {
  const images = [
    { id: "1", name: axd },
    { id: "2", name: figma },
    { id: "3", name: insta },
    { id: "4", name: photoshop },
    { id: "5", name: vscode },
    { id: "6", name: youtube },
  ];

  return (
    <div className="branding-container">
      {images.map((image) => (
        <div key={image.id} className="brand-container">
          <img src={image.name} alt={image.id} />
        </div>
      ))}
    </div>
  );
};

export default Branding;
