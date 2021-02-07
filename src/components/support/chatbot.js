import React, { Component } from "react";
import Chatbot from "react-chatbot-kit";

import ActionProvider from "./chatbot_util/action_provider";
import MessageParser from "./chatbot_util/message_parser";
import config from "./chatbot_util/chatbot_config";

export default class Chat extends Component {
  render() {
    return (
      <div className="chatbot-container">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    );
  }
}
