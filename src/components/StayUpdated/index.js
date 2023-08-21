import React, { useEffect, useState } from "react";
import successIcon from "../../assets/icon-success.svg";
const StayUpdated = ({ setMailSubmitted }) => {
  const preIcon = <img src={successIcon} width={30} />;
  useEffect(() => {
    document.title = "Stay Updated!";
  }, []);

  return (
    <div className="card-container">
      {/* LEFT COLUMN */}
      <div className="card-left-col">
        <h1 className="stay-updated">Stay updated!</h1>
        <p className="join-text">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          <li>
            {preIcon}
            Product discovery and building what matters
          </li>
          <li>
            {preIcon}
            Measuring to ensure updates are a success
          </li>
          <li>
            {preIcon}
            And much more!
          </li>
        </ul>

        <div className="email-address">
          <label htmlFor="">Email address</label>
          <input type="text" placeholder="email@company.com" />
        </div>

        <div className="subscribe-area">
          <button onClick={() => setMailSubmitted((pre) => !pre)}>
            Subscribe to monthly newsettler
          </button>
        </div>
      </div>
      {/* RIGHT COLUMN */}
      <div className="card-right-col">
        <div className="card-image"></div>
      </div>
    </div>
  );
};

export default StayUpdated;
