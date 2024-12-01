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
            className={`fixed z-10 transition-transform duration-300 ease-in-out bg-transparent border border-gray-500 rounded-full opacity-50 pointer-events-none ${hovered ? "w-[70px] h-[70px] scale-150" : "w-[50px] h-[50px]"
                }`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%) ${hovered ? "scale(1.2)" : ""}`,
            }}
        />

    );
};

export default Cursor;
