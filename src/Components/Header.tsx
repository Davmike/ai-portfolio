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
        setIsProfile
    }: any = context;

    return (
        <header className="bg-[#13141B] h-[64px] w-full absolute top-0 bottom-0 right-0 left-0 z-10">
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center mx-auto max-w-[800px] px-[20px]">
                {/* David's GPT Logo Text Section */}
                <div className="flex items-center space-x-2">
                    <img src="../public/assets/gpt.png" className="w-8 h-8 rounded-full" alt="" />
                    <h1 className="flex items-center space-x-1 text-[19px] font-semibold text-white">
                        <em>DAVID'S</em>
                        <strong className="text-[#c3bf4a]">RESUME</strong>
                        <span>GPT</span>
                    </h1>
                </div>
                {/* Sign in button and text */}
                <div className="flex items-center ml-auto gap-[20px]">
                    {isSignedInGoogle || isSignedInGithub ? (
                        <><img src="./public/assets/profile.png" alt="User Avatar" className="w-5 h-5 rounded-full" onClick={() => {
                            setIsProfile(!isProfile)
                        }} />
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setIsSign(!isSign)}>
                                <img src="/assets/sign-in.png" alt="sign in img" className="w-4 h-4" />
                                <button className="text-white" >SIGN IN</button>
                            </div>
                            <img src="../public/assets/dots.png" onClick={() => {
                                setIsProfile(!isProfile)
                            }} className="w-[18px] h-[18px] cursor-pointer" alt="" />
                        </>
                    )}

                </div>
            </div>
        </header>
    );
}

export default Header;
