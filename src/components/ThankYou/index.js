import React, { useEffect } from "react";
import successImg from "../../assets/icon-success.svg";
const ThankYou = ({ setMailSubmitted }) => {
  useEffect(() => {
    document.title = "Thank You";
  }, []);
  return (
    <div className="thank-you-container">
      <img src={successImg} alt="" />
      <h1 className="thanks">Thanks for subscribing!</h1>
      <p className="confirmation">
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button
        className="dismiss-btn"
        onClick={() => setMailSubmitted((pre) => !pre)}
      >
        Dismiss message
      </button>
    </div>
  );
};

export default ThankYou;
