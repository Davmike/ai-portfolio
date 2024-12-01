import { useContext } from "react";
import { MyContext } from "./Context";

function Header() {
    const context = useContext(MyContext);
    const {
        setIsSign,
        isSign,
        isSignedInGoogle,
        isSignedInGithub,
        isProfile,
        setIsProfile,
        setHovered
    }: any = context;

    return (
        <header className="bg-[#13141B] h-[64px] w-full absolute top-0 bottom-0 right-0 left-0 z-10">
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center mx-auto max-w-[800px] px-[20px]">
                {/* David's GPT Logo Text Section */}
                <div
                    className="flex items-center p-2 space-x-2 transition-all duration-200 border border-transparent rounded hover-effect"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <img src="/assets/gpt.png" className="w-8 h-8 rounded-full" alt="" />
                    <h1 className="flex items-center space-x-1 text-[19px] font-semibold text-white">
                        <em>DAVID'S</em>
                        <strong className="text-[#c3bf4a]">RESUME</strong>
                        <span>GPT</span>
                    </h1>
                </div>

                {/* Sign in button and text */}
                <div className="flex items-center ml-auto gap-[20px]"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    {isSignedInGoogle || isSignedInGithub ? (
                        <>
                            <div className="border border-transparent rounded hover-effect p-[6px]" onClick={() => {
                                setIsProfile(!isProfile)
                            }}>
                                <img src="/assets/profile.png" alt="User Avatar" className="w-5 h-5 rounded-full" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-1 border border-transparent rounded hover-effect p-[5px] cursor-none" onClick={() => setIsSign(!isSign)}>
                                <img src="/assets/sign-in.png" alt="sign in img" className="w-4 h-4 cursor-none" />
                                <button className="text-white cursor-none" >SIGN IN</button>
                            </div>
                            {/* dots image div */}
                            <div className="border border-transparent rounded hover-effect p-[6px] cursor-none" onClick={() => {
                                setIsProfile(!isProfile)
                            }}>
                                <img src="/assets/dots.png" className="w-[18px] h-[18px]" alt="" />
                            </div>
                        </>
                    )}

                </div>
            </div>
        </header>
    );
}

export default Header;
