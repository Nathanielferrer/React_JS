import ChatbotProfileImage from '../assets/chatbot.png';
import UserProfileImage from '../assets/profile.jpg';

export function ChatMessage({message, sender}) { {/*Reusable components*/}
      return (
        <div className={`chat-message ${sender}` }>
          {sender === 'chatbot' && <img src={ChatbotProfileImage} width="50"/> } {/*The shortcut for If-Statement that if the condition in left is true then the result is the value on the right*/}
          <span className="message-text">{message}</span>
          {sender === 'user' && <img src={UserProfileImage} width="50"/>}
        </div>
      );
    }