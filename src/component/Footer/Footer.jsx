import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer_outer_">
      <div className="footer_container">
        <div className="footer_icon">
          <FacebookOutlinedIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        <div className="footerdata">
          <div>
            <ul>
              <li>Audio Description </li>
              <li>Inventore Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="copy-right">
            &copy; 1997-2024 Netflix, Inc. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
