import { useContext } from "react";
import { MyContext } from "./Context";

function About() {
    const context = useContext(MyContext);
    const {
        isHide
    }: any = context;

    return (
        !isHide && (
            < div id="about" className="px-[20px] max-w-[800px] flex justify-center items-center flex-col" >
                <h1 className="text-[23px] font-[5s00] text-[white] mb-[16px] text-center">Hi, my name is <span className="font-[800]">David Mikeladze</span> and I Code.</h1>
                <p className="text-[#bababa] text-[13px] about-p mt-[10px] text-center max-w-[600px]">
                    That my chatbot’s responses are limited to specific topics and inquiries about my professional journey and projects. Dive in and discover more!
                </p>
            </div >
        )
    )
}

export default About
