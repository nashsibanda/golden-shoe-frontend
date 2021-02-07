import React from "react";

const HowDoIReturn = props => {
  const helpText = (
    <div>
      <em>How do I make a return?</em>
      <p>
        Just mark the items you are returning on the return form that came with
        your order, pack your items in the box, and use the enclosed return
        label to send back your items. Make sure to cover up or remove the
        original delivery barcode on the box.
      </p>
      <p>
        If you want to schedule a pickup or you’re simply missing a return
        label, register your return online. There you can book a time slot and
        optionally select a designated safe place by using the “additional
        information” field toarrange a contactless pickup. You’ll also be able
        to save a digital PDF label to print for your return. On the day of the
        pickup you will receive a notification via email, informing you of a 2
        hour time slot in which they will come to collect your parcel.
      </p>
      <p>
        Once you've dropped off your item or had it collected, you should
        receive a return receipt. Please keep hold of this as it's your proof of
        refund.
      </p>
    </div>
  );

  const returnBtn = (
    <button className="support-option-button" onClick={props.actionProvider.handleReturnsOptions}>
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
