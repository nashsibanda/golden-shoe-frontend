import React from "react";

const ReturnsOptions = props => {
  const options = [
    {
      text: "How do I return my order?",
      handler: props.actionProvider.handleHowDoIReturn,
      id: 1,
    },
    {
      text: "When is the latest I can return an order?",
      handler: props.actionProvider.handleWhenIsLatestReturn,
      id: 2,
    },
    {
      text: "How much does it cost to return an order?",
      handler: props.actionProvider.handleWhenIsLatestReturn,
      id: 3,
    },
    {
      text: "I've lost my original box or return form",
      handler: props.actionProvider.handleLostReturnFormBox,
      id: 4,
    },
    {
      text: "I need help with something else",
      handler: props.actionProvider.handleBackToTop,
      id: 5,
    },
  ];

  const optionsMarkup = options.map(option => (
    <button
      className="support-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="support-options-container">{optionsMarkup}</div>;
};

export default ReturnsOptions;
