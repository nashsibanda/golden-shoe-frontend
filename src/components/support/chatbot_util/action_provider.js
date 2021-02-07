class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet() {
    const greeting = this.createChatBotMessage("Hello there, shoe lover!");
    this.updateChatbotState(greeting);
  }
  
  handleReturnsOptions = () => {
    const message = this.createChatBotMessage("Sure! What do you want to know about returns?", {
      widget: "returnsOptions",
    });
    this.updateChatbotState(message);
  }

  handleBackToTop = () => {
    const message = this.createChatBotMessage("What else can I help with?", {
      widget: "supportOptions",
    })
    this.updateChatbotState(message);
  }
  
  handleHowDoIReturn = () => {
    const greeting = this.createChatBotMessage("I can help you with that!", {
      widget: "howDoIReturn",
    });
    this.updateChatbotState(greeting);
  }
  handleWhenIsLatestReturn = () => {
    const greeting = this.createChatBotMessage("I can help you with that!", {
      widget: "whenIsLatestReturn"
    });
    this.updateChatbotState(greeting);
  }

  handleLostReturnFormBox = () => {
    const greeting = this.createChatBotMessage("I can help you with that!", {
      widget: "lostReturnFormBox"
    });
    this.updateChatbotState(greeting);
  }

  handleReturnsList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Returns:",
      {
        widget: "returnsLinks",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
