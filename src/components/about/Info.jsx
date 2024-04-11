import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award about_icon"></i>

        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">
          don't have any relevant work experience
        </span>
      </div>

      <div className="about_box">
        <i className="bx bx-briefcase-alt about_icon"></i>

        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">still working on my first one</span>
      </div>

      <div className="about_box">
        <i className="bx bx-support about_icon"></i>

        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 996</span>
      </div>
    </div>
  );
};

export default Info;
