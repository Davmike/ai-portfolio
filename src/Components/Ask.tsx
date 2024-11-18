import { useContext, useState, useRef, useEffect } from 'react';
import { MyContext } from './Context';

function Ask() {
    const context = useContext(MyContext);
    const {
        newMessage,
        setNewMessage,
        isFocused,
        setIsFocused,
        setIsHide,
        setIsMessage,
        isSign,
        setIsSign,
        isSignedInGoogle,
        isSignedInGithub
    }: any = context;

    const [messages, setMessages] = useState([
        { id: 1, text: "გამარჯობა!", sender: "bot" },
        { id: 2, text: "გამარჯობა! როგორ ხარ?", sender: "user" }
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<any>(null);

    // Function to scroll to the bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Auto-scroll on new message
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Chat message handling logic
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

            // Bot response
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        id: prevMessages.length + 1,
                        text: "მადლობა მესიჯისთვის!",
                        sender: "bot"
                    }
                ]);
            }, 1000);

            // Reset textarea height after sending the message
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';  // Reset height
            }
        }
    };

    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${Math.min(textarea.scrollHeight, 294)}px`;
    };

    const handleKeyPress = (e: { shiftKey: any; preventDefault(): unknown; key: string }) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (isSignedInGoogle || isSignedInGithub) {
                handleSendMessage();
                setIsMessage(true);
                setIsHide(true);
            } else {
                setIsSign(!isSign);
            }
        }
    };


    return (
        <div className="absolute top-[6.5%] flex flex-col w-full max-w-[800px]">
            {/* Chat display */}
            <div className="flex-1 p-4 overflow-x-hidden overflow-y-auto"
                style={{ maxHeight: '79.2vh' }}>
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}
                    >
                        <div
                            className={`p-2 rounded-lg inline-block ${message.sender === 'user' ? 'bg-blue-200' : 'bg-green-200'
                                }`}
                        >
                            <p className='text-left' style={{ wordWrap: "break-word", whiteSpace: "pre-wrap", wordBreak: 'break-all' }}>{message.text}</p>
                        </div>
                    </div>
                ))}
                {/* Scroll anchor */}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Section */}
            <div
                className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 text-gray-300 z-10 ${isFocused ? 'bg-black' : 'bg-black/30'
                    } backdrop-blur-md w-full max-w-[800px] rounded-tr-lg rounded-tl-lg flex items-center px-[20px] transition-colors duration-300`}
            >
                <textarea
                    ref={textareaRef}
                    placeholder="Ask any career-related questions..."
                    className="flex-1 text-gray-300 placeholder-gray-500 bg-transparent outline-none resize-none m-[20px] pt-[20px] h-auto max-h-[294px] overflow-y-auto"
                    value={newMessage}
                    onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        setNewMessage(target.value);
                        handleInput();
                    }}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <button
                    className="ml-2 text-gray-400 hover:text-gray-300"
                    onClick={() => {
                        if (isSignedInGoogle || isSignedInGithub) {
                            handleSendMessage();
                            setIsMessage(true);
                            setIsHide(true);
                        } else {
                            setIsSign(!isSign);
                        }
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}


export default Ask;
