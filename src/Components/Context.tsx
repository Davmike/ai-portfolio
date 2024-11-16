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
    isSignedInGoogle: boolean;
    setIsSignedInGoogle: (isSignedIn: boolean) => void;
    email: boolean;
    setEmail: (email: boolean) => void;
    isSignOut: boolean;
    setIsSignOut: (isSignOut: boolean) => void;
    isProfile: boolean;
    setIsProfile: (isProfile: boolean) => void;
    isSignedInGithub: boolean;
    setIsSignedInGithub: (isSignedInGithub: boolean) => void;
    userName: boolean;
    setUserName: (userName: boolean) => void;
    isSocial: boolean;
    setIsSocial: (isSocial: boolean) => void;
    isEmail: boolean;
    setIsEmail: (isEmail: boolean) => void;
    name: string;
    setName: (name: string) => void;
    validEmail: string;
    setValidEmail: (validEmail: string) => void;
    message: string;
    setMessage: (message: string) => void;
    isButtonDisabled: boolean;
    setIsButtonDisabled: (isButtonDisabled: boolean) => void;
    successMessage: boolean;
    setSuccessMessage: (successMessage: boolean) => void;
    newMessage: string;
    setNewMessage: (newMessage: string) => void;
    messages: any;
    setMessages: (messages: any) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
    const context = useContext(MyContext);
    return context;
}