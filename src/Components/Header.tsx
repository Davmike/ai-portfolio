import { useContext } from "react";
import { MyContext } from "./Context";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";



function Header() {
    const context = useContext(MyContext);
    const {
        setIsSign,
        isSign,
        isSignedIn,
        setIsSignedIn
    }: any = context;

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // როდესაც წარმატებით გამოვიდეთ, გავაუქმოთ isSignedIn სტეიტი
                setIsSignedIn(false);
                // ასევე შეგიძლიათ სხვა მონაცემები წაშალოთ, თუ გსურთ
                localStorage.removeItem("name");
                localStorage.removeItem("email");
                localStorage.removeItem("profilePic");
            })
            .catch((error) => {
                console.error("Error signing out: ", error);
            });
    };

    return (
        <header className="bg-[#13141B] h-[64px] w-full absolute top-0 bottom-0 right-0 left-0">
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
                <div className="flex items-center ml-auto gap-[50px]">
                    {isSignedIn ? (
                        <button className="text-gray-400" onClick={handleSignOut}>SIGN OUT</button>
                    ) : (
                        <button className="text-gray-400" onClick={() => setIsSign(!isSign)}>SIGN IN</button>
                    )}
                    <img src="../public/assets/dots.png" className="w-[18px] h-[18px]" alt="" />
                </div>
            </div>
        </header>
    );
}

export default Header;
