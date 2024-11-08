import { useContext } from "react";
import { MyContext } from "./Context";

function Profile() {
    const context = useContext(MyContext);
    const {
        isProfile
    }: any = context;

    return (
        !isProfile && (
            <div className="fixed inset-0 z-10 flex items-center justify-center" id="sign">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.1px] grayscale-[100%]"></div>

                <div className="bg-[#1E222C] bottom-0 text-white rounded-lg shadow-lg w-[400px] max-w-[90%] p-6 absolute z-10">
                    <button
                        className="absolute text-gray-400 top-4 right-4 hover:text-white"
                    >
                        &times;
                    </button>
                    {/* this is david resume name and logo */}
                    <div className="flex items-center space-x-2">
                        <img src="../public/assets/gpt.png" className="w-6 h-6 rounded-full" alt="" />
                        <h3 className="text-[18px] font-semibold" id="login-text">DAVID'S RESUME GPT</h3>
                    </div>
                    <p className="mb-4 mt-1 text-gray-400 text-[11px] pl-4 space-y-4 border-b border-gray-700">
                        We're sad to see you leave our website
                    </p>
                    {/* Menu List */}
                    <ul className="pl-4 space-y-4 border-l border-gray-700">
                        <li className="flex items-center text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-white">
                            <span className="mr-2 material-icons">autorenew</span>
                            <span className="text-[15px]">RESTART CONVERSATION</span>
                        </li>
                        <li className="flex items-center text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-white">
                            <span className="mr-2 material-icons">cloud_upload</span>
                            <span className="text-[15px]">UPLOAD YOUR CV</span>
                        </li>
                        <li className="flex items-center text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-white">
                            <span className="mr-2 material-icons">credit_card</span>
                            <span className="text-[15px]">GET CREDITS</span>
                        </li>
                        <li className="flex items-center text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-white">
                            <span className="mr-2 material-icons">feedback</span>
                            <span className="text-[15px]">FEEDBACK</span>
                        </li>
                        <li className="flex items-center text-gray-400 transition duration-200 ease-in-out cursor-pointer hover:text-white">
                            <span className="mr-2 material-icons">info</span>
                            <span className="text-[15px]">GPT DISCLAIMER</span>
                        </li>
                    </ul>
                    <p className="mt-4 text-[10px] text-center text-gray-500">
                        Don't Leave me :(
                    </p>
                </div>
            </div>)
    );
}

export default Profile;
