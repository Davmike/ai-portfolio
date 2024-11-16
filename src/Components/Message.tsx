import { useContext, useState } from 'react';
import { MyContext } from './Context';

function Message() {
    const context = useContext(MyContext);
    const {
        newMessage,
        setNewMessage
    }: any = context;

    const [messages, setMessages] = useState([
        { id: 1, text: "გამარჯობა!", sender: "bot" },
        { id: 2, text: "გამარჯობა! როგორ ხარ?", sender: "user" }
    ]);

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([
                ...messages,
                {
                    id: messages.length + 1,
                    text: newMessage,
                    sender: "user"
                }
            ]);
            setNewMessage("");

            // ბოტის პასუხი
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    {
                        id: prevMessages.length + 1,
                        text: "მადლობა მესიჯისთვის!",
                        sender: "bot"
                    }
                ]);
            }, 1000);
        }
    };

    const handleKeyPress = (e: { key: string; }) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="absolute bottom-[70%]  flex flex-col bg-white border border-gray-300 rounded-lg shadow-lg w-96 max-h-96">
            <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((message) => (
                    <div key={message.id} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
                        <div className={`p-2 rounded-lg inline-block ${message.sender === 'user' ? 'bg-blue-200' : 'bg-green-200'
                            }`}>
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex p-2 border-t border-gray-300">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="მესიჯი..."
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                />
                <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 ml-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                    გაგზავნა
                </button>
            </div>
        </div>
    );
}

export default Message;