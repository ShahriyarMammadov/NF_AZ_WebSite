import React, { useEffect, useState } from "react";
import "./index.scss";
import { FaAngleUp } from "react-icons/fa";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);

  const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollY / scrollHeight) * 100;

      setProgress(scrollProgress);
      setShowButton(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="backToTop"
      style={{ position: "fixed", bottom: "20px", right: "20px" }}
    >
      {showButton && (
        <div style={{ position: "relative", width: "60px", height: "60px" }}>
          <svg width="60" height="60" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="gray"
              strokeWidth="5"
              fill="none"
              opacity="0.2"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#39b54a"
              strokeWidth="6"
              fill="none"
              strokeDasharray="251.2"
              strokeDashoffset={`${251.2 - (progress / 100) * 251.2}`}
            />
          </svg>

          <button
            onClick={backToTop}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "40px",
              height: "40px",
              backgroundColor: "#39b54a",
              color: "white",
              border: "none",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            <FaAngleUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default BackToTop;
