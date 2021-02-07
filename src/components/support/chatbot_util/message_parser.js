import * as Dict from './dictionaries'

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerMessage = message.toLowerCase();

    if (Dict.greetings.some(word => lowerMessage.includes(word))) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
