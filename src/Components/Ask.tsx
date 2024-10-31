import React from 'react';

function Ask() {
    return (
        <div className="flex items-center p-4 bg-gray-200 rounded-b-lg">
            <input
                type="text"
                placeholder="Type your question here..."
                className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
            <button className="px-4 py-2 ml-2 text-white bg-green-600 rounded-lg hover:bg-green-700">
                Send
            </button>
        </div>
    );
}

export default Ask;
