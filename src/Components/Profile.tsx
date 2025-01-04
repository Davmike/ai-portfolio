import { useContext } from "react";
import { MyContext } from "./Context";

function Profile() {
    const context = useContext(MyContext);
    const {
        isProfile,
        setIsProfile,
        isSignedInGoogle,
        isSignedInGithub,
        setIsSignOut,
        isSignOut,
        setIsSign,
        isSign,
        setIsSocial,
        isEmail,
        setIsEmail,
        setHovered
    }: any = context;

    const menuItems = [
        {
            text: "RESTART CONVERSATION",
            icon: "/assets/restart.png",
            onClick: () => window.location.reload(),
        },
        {
            text: "DOWNLOAD MY CV",
            icon: "/assets/resume.png",
            onClick: null,
        },
        {
            text: "SEND ME EMAIL",
            icon: "/assets/gmail.png",
            onClick: () => {
                setIsEmail(!isEmail);
                setTimeout(() => setIsProfile(!isProfile), 200);
            },
        },
        {
            text: "GET MY SOCIAL",
            icon: "/assets/social.png",
            onClick: () => {
                setIsSocial(false);
                setTimeout(() => setIsProfile(!isProfile), 200);
            },
        },
    ];

    if (isSignedInGoogle || isSignedInGithub) {
        menuItems.push({
            text: "LOGOUT",
            icon: "/assets/logout-new.png",
            onClick: () => {
                setIsSignOut(!isSignOut);
                setTimeout(() => setIsProfile(!isProfile), 200);
            },
        });
    } else {
        menuItems.push({
            text: "SIGN-IN",
            icon: "/assets/logout-new.png",
            onClick: () => {
                setIsSign(!isSign);
                setTimeout(() => setIsProfile(!isProfile), 200);
            },
        });
    }

    return (
        !isProfile && (
            <div className="fixed inset-0 z-10 flex items-center justify-center" id="sign">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.1px] grayscale-[100%]" onClick={() => setIsProfile(!isProfile)}></div>
                <div className={`bg-[#1E222C] bottom-0 text-white rounded-t-lg shadow-lg w-[480px] h-[460px] max-w-[90%] p-6 absolute z-10 ${!isProfile ? "slide-up" : "slide-down"}`} >
                    <button
                        className="absolute text-gray-400 top-4 right-4 hover:text-white cursor-none"
                        onClick={() => setIsProfile(!isProfile)}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}>
                        &times;
                    </button>
                    {/* this is david resume name and logo */}
                    <div className="flex items-center space-x-2">
                        <img src="/assets/gpt.png" className="w-6 h-6 rounded-full" alt="" />
                        <h3 className="text-[18px] font-semibold" id="login-text">DAVID'S RESUME GPT</h3>
                    </div>
                    {/* signed or not text */}
                    {(isSignedInGoogle || isSignedInGithub) ? (
                        <p className="mb-6 mt-1 text-[#7f7f7f] text-[11px] pb-[24px] space-y-4 border-b-[0.5px] border-[#484848]">
                            Signed as {" "}
                            <b className="font-bold">
                                {isSignedInGoogle
                                    ? localStorage.getItem("email") ?? ""
                                    : localStorage.getItem("displayName") ?? ""}
                            </b>
                        </p>
                    ) : (
                        <p className="mb-6 mt-1 text-[#7f7f7f] text-[11px] pb-[24px] space-y-4 border-b-[0.5px] border-[#484848]">
                            Please sign in to use my resume
                        </p>
                    )}

                    {/* Menu List */}
                    <ul className="space-y-1">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] hover:border-white"
                                onClick={item.onClick || undefined}
                            >
                                <button className="profile-btn hover:text-white cursor-none">
                                    <img className="w-[16px] h-[16px]" src={item.icon} alt="" />
                                    <span>{item.text}</span>
                                </button>
                            </li>
                        ))}
                        {/* <li className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] hover:border-white" onClick={() => window.location.reload()}>
                            <button className="profile-btn hover:text-white cursor-none">
                                <img className="w-[16px] h-[16px] " src="/assets/restart.png" alt="" />
                                <span>RESTART CONVERSATION</span>
                            </button>
                        </li>
                        <li className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] hover:border-white">
                            <button className="profile-btn hover:text-white cursor-none">
                                <img className="w-[16px] h-[16px] " src="/assets/resume.png" alt="" />
                                <span>DOWNLOAD MY CV</span>
                            </button>
                        </li>
                        <li className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] hover:border-white"
                            onClick={() => {
                                setIsEmail(!isEmail); setTimeout(() => {
                                    setIsProfile(!isProfile);
                                }, 200);
                            }}>
                            <button className="profile-btn hover:text-white cursor-none">
                                <img className="w-[16px] h-[16px] " src="/assets/gmail.png" alt="" />
                                <span>SEND ME EMAIL</span>
                            </button>
                        </li>
                        <li className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] hover:border-white" onClick={() => {
                            setIsSocial(false); setTimeout(() => {
                                setIsProfile(!isProfile);
                            }, 200);
                        }}>
                            <button className="profile-btn hover:text-white cursor-none">
                                <img className="w-[16px] h-[16px] " src="/assets/social.png" alt="" />
                                <span>GET MY SOCIAL</span>
                            </button>
                        </li>

                        {isSignedInGoogle || isSignedInGithub ? (
                            <li className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] hover:border-white" onClick={() => {
                                setIsSignOut(!isSignOut);
                                setTimeout(() => {
                                    setIsProfile(!isProfile);
                                }, 200);
                            }}>
                                <button className="profile-btn hover:text-white cursor-none">
                                    <img className="w-[16px] h-[16px] " src="/assets/logout-new.png" alt="" />
                                    <span>LOGOUT</span>
                                </button>
                            </li>
                        ) : (
                            <li className="flex items-center text-gray-400 transition duration-200 ease-in-out border-l-4 border-[#484848] hover:border-white" onClick={() => {
                                setIsSign(!isSign);
                                setTimeout(() => {
                                    setIsProfile(!isProfile);
                                }, 200);
                            }}
                            >
                                <button className="profile-btn hover:text-white cursor-none">
                                    <img className="w-[16px] h-[16px] " src="/assets/logout-new.png" alt="" />
                                    <span>SIGN-IN</span>
                                </button>
                            </li>
                        )} */}
                    </ul>
                </div>
            </div >
        )
    );
}

export default Profile;
