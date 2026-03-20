import { useState} from 'react'
import {Chatbot } from 'supersimpledev';

export function ChatbotInput({chatMessages, setChatMessages}) {
      const [inputText, setInputText] = useState('');

      function saveInputText(event) {
        setInputText(event.target.value); //gives the elements that i am typing in
      }

      function sendMessage() {
        const newChatMessages = [
          ...chatMessages,
          {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID()
          }      
        ]

        setChatMessages(newChatMessages);

        const response = Chatbot.getResponse(inputText);
        setChatMessages([
          ...newChatMessages,
          {
            message: response,
            sender: "chatbot",
            id: crypto.randomUUID()
          }
        ]);

        setInputText(''); //This is to update the text into empty string so after we send our message the message in the text box will be removed
      }

      return (
        <div className="container">  {/*This is called Fragments. A group elements together without using another div to be nested*/}
          <input 
            placeholder="Send a message to chatbot" 
            size="30"
            onChange = {saveInputText} //Runs a function when we change the text inside an input elements
            value = {inputText} //Add a props value to update it to html
            className="input-text"
          />
          <button
            onClick = {sendMessage}
            className="style-button"
          >Send</button>
        </div>
      );
    }