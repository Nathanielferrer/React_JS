import { useState } from 'react'
import {ChatbotInput} from './components/ChatbotInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
      const [chatMessages, setChatMessages] = useState([{ 
        //Inside the array chatMeesages, setChatMessages is array Destructuring
        message: "Hello Chatbot", 
        sender: "user",
        id: "id1" //Each components will have key to track changes
      }, {
        message: "Hello! How can i help you?", 
        sender: "chatbot",
        id: "id2"
      }, {
        message: "What is the Date today?",
        sender: "user", 
        id: "id3"
      }, {
        message: "The Date today is March 13",
        sender: "chatbot", 
        id: "id4"
      }]);
      return (
        <div className="main-container">
          <ChatbotInput
            chatMessages = {chatMessages}
            setChatMessages = {setChatMessages}  
          /> {/*Same thing as ChatbotInput() but it look like we are creating our own html elements*/}
          <ChatMessages
            chatMessages = {chatMessages}
          />
        </div>
      );
    } 

export default App
