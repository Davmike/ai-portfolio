


function Message() {
    return (
        <div className="flex flex-col bg-white border border-gray-300 rounded-lg shadow-lg w-96 max-h-96">
            <div className="p-4 text-center bg-gray-100 border-b border-gray-300">
                <h2 className="text-lg font-semibold">ChatGPT</h2>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="mb-2">
                    <div className="p-2 bg-green-200 rounded-lg">
                        <p>გამარჯობა!</p>
                    </div>
                </div>
                <div className="mb-2 text-right">
                    <div className="p-2 bg-blue-200 rounded-lg">
                        <p>გამარჯობა! როგორ ხარ?</p>
                    </div>
                </div>
                {/* დამატებითი მესიჯები */}
            </div>
            <div className="flex p-2 border-t border-gray-300">
                <input type="text" placeholder="მესიჯი..." className="flex-1 p-2 border border-gray-300 rounded-lg" />
                <button className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg">გაგზავნა</button>
            </div>
        </div>
    );
}

export default Message;
