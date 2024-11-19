import { useContext } from "react";
import { MyContext } from "./Context";
import { FaGithub, FaGoogle, FaInstagram, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";


function Social() {
    const context = useContext(MyContext);
    const {
        isSocial,
        setIsSocial
    }: any = context;

    const categories = [
        {
            id: "github",
            color: "#374151",
            src: <FaGithub />,
            link: "https://github.com/Davmike"
        },
        {
            id: "gmail",
            color: "#dc2626",
            src: <FaGoogle />,
            link: "https://mail.google.com/",
        },
        {
            id: "instagram",
            color: "#FE3054",
            src: <FaInstagram />,
            link: "https://www.instagram.com/davmikeladze/",
        },
        {
            id: "linkedin",
            color: "#0766FF",
            src: <FaLinkedin />,
            link: "https://www.linkedin.com/in/davmikeladze/",
        },
        {
            id: "portfolio",
            color: "#0a7833",
            src: <FaGlobe />,
            link: "https://new-portfolio-three-pearl.vercel.app/"
        },
        {
            id: "twitter",
            color: "#000000",
            src: <FaTwitter />,
            link: "https://x.com/davmikeladze",
        },
    ]

    return (
        !isSocial && (
            <div className="fixed inset-0 z-10 flex items-center justify-center" id="sign">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.1px] grayscale-[100%]" onClick={() => setIsSocial(!isSocial)}></div>

                <div className="bg-[#1E222C] text-white rounded-lg shadow-lg w-[400px] max-w-[90%] p-6 relative z-10">
                    <button
                        className="absolute text-gray-400 top-4 right-4 hover:text-white"
                        onClick={() => setIsSocial(!isSocial)}
                    >
                        &times;
                    </button>
                    <h2 className="mb-2 text-[18px] font-semibold uppercase" id="login-text">you are close to follow me</h2>

                    <p className="pl-3 mb-6 text-gray-400 border-l-2 border-blue-500 text-[12px]">
                        I’m thrilled that you’re interested in connecting with me on social media!
                    </p>
                    <div className="flex justify-center gap-1 mt-6 md:gap-4">
                        {categories.map((category, index) => {
                            return (
                                <a key={index} href={category.link} target="_blank" id={category.id} style={{ backgroundColor: category.color }} className="text-gray-300 outline-none border-none px-4 py-2 text-[15px] rounded-[50px] transition duration-200 flex items-center">
                                    {category.src}
                                </a>
                            )
                        })}
                    </div>
                    {/* <p className="mt-4 text-[10px] text-center text-gray-500">
                        Choose a sign-in method
                    </p> */}
                </div>
            </div>
        )

    );
}

export default Social
