import React, { useEffect, useState } from "react";
import successIcon from "../../assets/icon-success.svg";
const StayUpdated = ({ setMailSubmitted, email, setEmail }) => {
  const [error, setError] = useState(false);
  // Icon image for list items
  const preIcon = <img src={successIcon} width={30} />;
  // Regex pattern for email
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validateEmail = (email) => {
    return String(email).toLowerCase().match(pattern);
  };

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
          <div className="email-pre-input">
            <p>Email address</p>
            {error && <p className="error-text">Valid email required</p>}
          </div>
          <input
            className={error ? "email-error" : ""}
            type="text"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (validateEmail(email)) {
                  setMailSubmitted((pre) => !pre);
                  setError(false);
                } else {
                  setError(true);
                }
              }
            }}
          />
        </div>

        <div className="subscribe-area">
          <button
            onClick={() => {
              if (validateEmail(email)) {
                setMailSubmitted((pre) => !pre);
                setError(false);
              } else {
                setError(true);
              }
            }}
          >
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
