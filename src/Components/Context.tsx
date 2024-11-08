import { createContext, useContext } from "react";

interface ComponentsProps {
    isFocused: boolean;
    setIsFocused: (isFocused: boolean) => void;
    isHide: boolean;
    setIsHide: (isHide: boolean) => void;
    isMessage: boolean;
    setIsMessage: (isMessage: boolean) => void;
    isSign: boolean;
    setIsSign: (isSign: boolean) => void;
    isSignedIn: boolean;
    setIsSignedIn: (isSignedIn: boolean) => void;
    profilePic: boolean;
    setProfilePic: (profilePic: boolean) => void;
    email: boolean;
    setEmail: (email: boolean) => void;
    isSignOut: boolean;
    setIsSignOut: (isSignOut: boolean) => void;
    isProfile: boolean;
    setIsProfile: (isProfile: boolean) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
    const context = useContext(MyContext);
    return context;
}