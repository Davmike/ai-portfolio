import React from 'react';

interface MessageProps {
    text: string;
    isUser: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isUser }) => {
    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
            <div
                className={`p-3 rounded-lg ${isUser ? "bg-green-600 text-white" : "bg-gray-200 text-black"
                    } max-w-xs break-words`}
            >
                {text}
            </div>
        </div>
    );
};

export default Message;
