import { useRef, useEffect } from 'react'
import {ChatMessage} from './ChatMessage'

function ChatMessages({chatMessages}) { {/*Object {} = group of related values together*/}
    const chatMessagesRef = useRef(null);

    useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
        containerElem.scrollTop = containerElem.scrollHeight
    }
    }, [chatMessages]);

    return (
    <div ref={chatMessagesRef}>
        {chatMessages.map((chatMessage) => {
        return (
            <ChatMessage
            key={chatMessage.id}
            message={chatMessage.message}
            sender={chatMessage.sender}
            />
        );
        })}
    </div>
    );
}

export default ChatMessages; {/* This called default export if you want to export one thing in a file*/}