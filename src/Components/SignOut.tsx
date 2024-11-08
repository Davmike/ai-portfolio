import { useContext } from "react";
import { MyContext } from "./Context";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";


function SignOut() {
    const context = useContext(MyContext);
    const {
        isSignOut,
        setIsSignOut,
        setIsSignedIn
    }: any = context;

    // this function work to cancel sign in
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setIsSignedIn(false);
                localStorage.removeItem("name");
                localStorage.removeItem("email");
                localStorage.removeItem("profilePic");
                // this state work for hide signout component
                setIsSignOut(!isSignOut);
            })
            .catch((error) => {
                console.error("Error signing out: ", error);
            });
    };

    return (
        !isSignOut && (
            <div className="fixed inset-0 z-10 flex items-center justify-center" id="sign">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.1px] grayscale-[100%]" onClick={() => setIsSignOut(!isSignOut)}></div>

                <div className="bg-[#1E222C] text-white rounded-lg shadow-lg w-[400px] max-w-[90%] p-6 relative z-10">
                    <button
                        className="absolute text-gray-400 top-4 right-4 hover:text-white"
                        onClick={() => setIsSignOut(!isSignOut)}
                    >
                        &times;
                    </button>
                    <h2 className="mb-2 text-[18px] font-semibold" id="login-text">LOG OUT TO RETURN TO THE LOGIN</h2>
                    <p className="mb-4 text-gray-400 text-[11px]">
                        We're sad to see you leave our website
                    </p>
                    <p className="pl-3 mb-6 text-gray-400 border-l-2 border-blue-500 text-[12px]">
                        If you log out, you will need to sign in again to use the assistant.
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                        <button id="github" className="bg-gray-700 text-gray-300 outline-none border-none px-4 py-2 text-[15px] rounded-[5px] transition duration-200 flex items-center">
                            <span className="font-semibold" id="acc" onClick={() => setIsSignOut(!isSignOut)}>CANCEL</span>
                        </button>
                        <button id="gmail" className="flex items-center px-4 py-2 outline-none border-none text-white text-[15px] transition duration-200 bg-red-600 rounded-[5px]" onClick={handleSignOut}>
                            <span className="font-semibold" id="acc">SIGN OUT</span>
                        </button>
                    </div>
                    <p className="mt-4 text-[10px] text-center text-gray-500">
                        Don't Leave me :(
                    </p>
                </div>
            </div>
        )
    )
}

export default SignOut
