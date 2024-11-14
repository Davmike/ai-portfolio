import { useContext } from "react";
import { MyContext } from "./Context";

function Email() {
    const context = useContext(MyContext);
    const {
        isEmail,
        setIsEmail
    }: any = context;

    return (
        !isEmail && (
            <div className="fixed inset-0 z-10 flex items-center justify-center" id="sign">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.1px] grayscale-[100%]" onClick={() => setIsEmail(!isEmail)}></div>

                <div className="bg-[#1E222C] text-white rounded-lg shadow-lg w-[400px] max-w-[90%] p-6 relative z-10">
                    <button
                        className="absolute text-gray-400 top-4 right-4 hover:text-white"
                        onClick={() => setIsEmail(!isEmail)}
                    >
                        &times;
                    </button>
                    <h2 className="mb-2 text-[18px] font-semibold uppercase" id="login-text">you are close to follow me</h2>

                    <p className="pl-3 mb-6 text-gray-400 border-l-2 border-blue-500 text-[12px]">
                        I’m thrilled that you’re interested in connecting with me on social media!
                    </p>
                    {/* <p className="mt-4 text-[10px] text-center text-gray-500">
                Choose a sign-in method
            </p> */}
                </div>
            </div>
        )
    )
}

export default Email
