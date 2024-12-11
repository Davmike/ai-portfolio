import { useContext, useEffect, useState } from "react";
import { MyContext } from "./Context";

const Cursor = () => {
    const context = useContext(MyContext);
    const {
        hovered,
    }: any = context;

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return (
        <div
            className={`fixed z-10 transition-transform duration-300 ease-in-out bg-[#2D2D2D] border-none border-gray-500 rounded-full opacity-50 pointer-events-none ${hovered ? "w-[70px] h-[70px] scale-180" : "w-[40px] h-[40px]"} before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-grid-pattern before:opacity-25`}

            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%) ${hovered ? "scale(1.3)" : ""}`,
            }}
        />

    );
};

export default Cursor;
