import React from 'react';

function Menu() {
    return (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-center text-green-600">David's ChatBot</h3>
            <div className="flex flex-col space-y-4">
                {/* Here you can add options or additional menus if needed */}
                <button className="w-full py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
                    Start Chatting
                </button>
            </div>
        </div>
    );
}

export default Menu;
