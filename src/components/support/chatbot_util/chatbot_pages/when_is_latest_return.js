import React from "react";

const WhenIsLatestReturn = props => {
  const helpText = (
    <div>
      <em>When is the latest I can return an item?</em>
      <p>
        If it’s not a fit, you have 100 days to return your items (so long as you haven't worn them outside) - <strong>FREE</strong>.
      </p>
    </div>
  );

  const returnBtn = (
    <button
      className="support-option-button"
      onClick={props.actionProvider.handleReturnsOptions}
    >
      Help me with something else.
    </button>
  );

  return (
    <div className="chatbot-info-container">
      {helpText}
      {returnBtn}
    </div>
  );
};

export default WhenIsLatestReturn;
