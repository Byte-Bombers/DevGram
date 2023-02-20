import React from "react";
import swapnil from "../assets/swapnil.jpeg";
import parwez from "../assets/parwez.jpg";
import pratyaksh from "../assets/pratyaksh.jpg";

const Footer = () => {
  const imgSize = 200;
  const imgStyle = {
    width: `${imgSize}px`,
    height: `${imgSize}px`,
    borderRadius: "50%",
    margin: "30px",
  };

  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#212121",
        color: "#fff",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h3>Made with ❤️ </h3>
      <p>We are team DevGram</p>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={swapnil} alt="Team member 1" style={imgStyle} />
          <p>Swapnil Sarkar</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={parwez} alt="Team member 2" style={imgStyle} />
          <p>Shaikh Parwez Hasim</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={pratyaksh} alt="Team member 3" style={imgStyle} />
          <p>Pratyaksh Mehrotra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
