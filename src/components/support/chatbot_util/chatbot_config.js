import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import LinkList from "./link_list";
import SupportOptions from './support_options'
import ReturnsOptions from './chatbot_pages/returns_options'
import HowDoIReturn from './chatbot_pages/how_do_i_return'
import WhenIsLatestReturn from './chatbot_pages/when_is_latest_return'
import LostReturnFormBox from './chatbot_pages/lost_return_form_box'

const config = {
  botName: "ShoeBot",
  initialMessages: [
    createChatBotMessage("Hi! What do you need help with?", {
      widget: "supportOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#931212",
    },
    chatButton: {
      backgroundColor: "#931212",
    },
  },
  widgets: [
    {
      widgetName: "supportOptions",
      widgetFunc: props => <SupportOptions {...props} />,
    },
    {
      widgetName: "returnsOptions",
      widgetFunc: props => <ReturnsOptions {...props} />,
    },
    {
      widgetName: "howDoIReturn",
      widgetFunc: props => <HowDoIReturn {...props} />,
    },
    {
      widgetName: "whenIsLatestReturn",
      widgetFunc: props => <WhenIsLatestReturn {...props} />,
    },
    {
      widgetName: "lostReturnFormBox",
      widgetFunc: props => <LostReturnFormBox {...props} />,
    },
    {
      widgetName: "returnsLinks",
      widgetFunc: props => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "How do I return an item",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
