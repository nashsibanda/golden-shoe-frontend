import React from "react";

const HowDoIReturn = props => {
  const helpText = (
    <div>
      <em>I've lost my original box or order form</em>
      <p>
        If you've lost your original box, you can use any other shoe box you
        might have. Be sure to remove any identifying information or barcodes
        from the exterior of the box.
      </p>
      <p>You can print a replacement return form here:</p>
      <a className="support-action-button" href="#">
        Print Return Form.
      </a>
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

export default HowDoIReturn;
