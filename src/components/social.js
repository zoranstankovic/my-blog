import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className="social-icons">
      <a
        href="https://twitter.com/RyunosukeZoran"
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        href="https://github.com/zoranstankovic"
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/zoran-stankovic-40748061/"
        className="social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Social;
