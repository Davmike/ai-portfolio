import { useContext } from "react";
import { MyContext } from "./Context";

function Profile() {
    const context = useContext(MyContext);
    const {
        isProfile,
        setIsProfile,
        isSignedIn,
        setIsSignOut,
        isSignOut,
        setIsSign,
        isSign
    }: any = context;

    return (
        !isProfile && (
            <div className="fixed inset-0 z-10 flex items-center justify-center" id="sign">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.1px] grayscale-[100%]" onClick={() => setIsProfile(!isProfile)}></div>

                <div className="bg-[#1E222C] bottom-0 text-white rounded-t-lg shadow-lg w-[480px] h-[460px] max-w-[90%] p-6 absolute z-10">
                    <button
                        className="absolute text-gray-400 top-4 right-4 hover:text-white"
                        onClick={() => setIsProfile(!isProfile)}>
                        &times;
                    </button>
                    {/* this is david resume name and logo */}
                    <div className="flex items-center space-x-2">
                        <img src="../public/assets/gpt.png" className="w-6 h-6 rounded-full" alt="" />
                        <h3 className="text-[18px] font-semibold" id="login-text">DAVID'S RESUME GPT</h3>
                    </div>
                    {/* signed or not text */}
                    {isSignedIn ? (
                        <p className="mb-6 mt-1 text-[#7f7f7f] text-[11px] pb-[24px] space-y-4 border-b-[0.5px] border-[#484848]">
                            Signed as {" "}
                            <b className="font-bold">{localStorage.getItem("email") ?? ""}</b>
                        </p>
                    ) : (
                        <p className="mb-6 mt-1 text-[#7f7f7f] text-[11px] pb-[24px] space-y-4 border-b-[0.5px] border-[#484848]">
                            Please sign in to use my resume
                        </p>
                    )}
                    {/* Menu List */}
                    < ul className="space-y-1">
                        <li className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] cursor-pointer hover:border-white">
                            <button className="profile-btn hover:text-white">
                                <img className="w-[16px] h-[16px] " src="./public/assets/restart.png" alt="" />
                                <span>RESTART CONVERSATION</span>
                            </button>
                        </li>
                        <li className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] cursor-pointer hover:border-white">
                            <button className="profile-btn hover:text-white">
                                <img className="w-[16px] h-[16px] " src="./public/assets/resume.png" alt="" />
                                <span>DOWNLOAD MY CV</span>
                            </button>
                        </li>
                        <li className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] cursor-pointer hover:border-white">
                            <button className="profile-btn hover:text-white">
                                <img className="w-[16px] h-[16px] " src="./public/assets/gmail.png" alt="" />
                                <span>SEND ME EMAIL</span>
                            </button>
                        </li>
                        <li className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] cursor-pointer hover:border-white">
                            <button className="profile-btn hover:text-white">
                                <img className="w-[16px] h-[16px] " src="./public/assets/social.png" alt="" />
                                <span>GET MY SOCIAL</span>
                            </button>
                        </li>

                        {isSignedIn ? (
                            <li className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] cursor-pointer hover:border-white" onClick={() => {
                                setIsSignOut(!isSignOut);
                                setTimeout(() => {
                                    setIsProfile(!isProfile);
                                }, 200);
                            }}>
                                <button className="profile-btn hover:text-white">
                                    <img className="w-[16px] h-[16px] " src="./public/assets/logout-new.png" alt="" />
                                    <span>LOGOUT</span>
                                </button>
                            </li>
                        ) : (
                            <li className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] cursor-pointer hover:border-white" onClick={() => {
                                setIsSign(!isSign);
                                setTimeout(() => {
                                    setIsProfile(!isProfile);
                                }, 200);
                            }}
                            >
                                <button className="profile-btn hover:text-white">
                                    <img className="w-[16px] h-[16px] " src="./public/assets/logout-new.png" alt="" />
                                    <span>SIGN-IN</span>
                                </button>
                            </li>
                        )}
                    </ul>
                    {/* logout button */}
                    {/* <div className="flex items-center justify-end px-[16px]">
                        <button className="flex items-center justify-end gap-1 text-[#4a4a4a] text-[11px] font-bold mt-[30px] hover:text-[white] logout-btn">
                            <img className="w-[13px] h-[13px] " src="./public/assets/sign-out.png" alt="" />
                            <span>LOGOUT</span>
                        </button>
                    </div> */}
                </div>
            </div >)
    );
}

export default Profile;
