import { useRef } from 'react';

function Ask() {
    const textareaRef = useRef<any>(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${Math.min(textarea.scrollHeight, 294)}px`;
    };

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 text-gray-300 bg-black/30 backdrop-blur-md w-full max-w-[800px] rounded-tr-lg rounded-tl-lg flex items-center px-[20px]">
            <textarea
                ref={textareaRef}
                placeholder="Ask any career-related questions..."
                className="flex-1 text-gray-300 placeholder-gray-500 bg-transparent outline-none resize-none m-[20px] pt-[20px] h-auto max-h-[294px] overflow-y-auto"
                onInput={handleInput}
            />
            <button className="ml-2 text-gray-400 hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
    );
}

export default Ask;
