import { createContext, useContext } from "react";

interface ComponentsProps {
    isFocused: boolean;
    setIsFocused: (isFocused: boolean) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
    const context = useContext(MyContext);
    return context;
}