import React from "react";

const SupportOptions = props => {
  const options = [
    {
      text: "Returns",
      handler: props.actionProvider.handleReturnsOptions,
      id: 1,
    },
    { text: "Product Availability", handler: () => {}, id: 2 },
    { text: "Deliveries", handler: () => {}, id: 4 },
    { text: "Technical Support", handler: () => {}, id: 3 },
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

export default SupportOptions;
