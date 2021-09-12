import React from "react";
import { Social } from "../../api/socialdata";
import './socialicon.css'

function SocialIcons() {
  const data = Social;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} key={item.platform} target="_blank" rel="noreferrer">
            <div className="social-icon-div">
              <img
                src={item.icon}
                alt="social-icons"
                className="social-icons"
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialIcons;
