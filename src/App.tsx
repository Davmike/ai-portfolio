import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import About from "./Components/About";
import Ask from "./Components/Ask";
import { useState } from "react";
// import Message from "./Components/Message";
import Sign from "./Components/Sign";
import Profile from "./Components/Profile";
import SignOut from "./Components/SignOut";
import Social from "./Components/Social";
import Email from "./Components/Email";
import Submit from "./Components/Submit";
import Cursor from "./Components/Cursor";

function App() {
  // this is state which i use in ask compnent to make input background show and hide on cursor click
  const [isFocused, setIsFocused] = useState<boolean>(false);
  // this state show and hide about section
  const [isHide, setIsHide] = useState<boolean>(false);
  // this state show and hide message components
  const [isMessage, setIsMessage] = useState<boolean>(false);
  // this state show and hide sign up component
  const [isSign, setIsSign] = useState<boolean>(true);
  // this state show and hide sign out component
  const [isSignOut, setIsSignOut] = useState<boolean>(true);
  // show and hide profile components
  const [isProfile, setIsProfile] = useState<boolean>(true);
  // hide and show social components
  const [isSocial, setIsSocial] = useState<boolean>(true);
  // hide and show Email components
  const [isEmail, setIsEmail] = useState<boolean>(true);

  // this state is check if signedin google
  const [isSignedInGoogle, setIsSignedInGoogle] = useState<boolean>(false);
  // this state get from localstorage user email google
  const [email, setEmail] = useState<any>(null);

  // this state is check if signedin github
  const [isSignedInGithub, setIsSignedInGithub] = useState<boolean>(false);
  // this state get from localstorage user name github
  const [userName, setUserName] = useState<any>(null);

  // for validation states
  const [name, setName] = useState<string>("");
  const [validEmail, setValidEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [successMessage, setSuccessMessage] = useState<boolean>(true); // State for success message

  // this state sand message
  const [newMessage, setNewMessage] = useState<string>("");

  //this state test if message can be send show chat or not
  const [isChatVisible, setIsChatVisible] = useState<boolean>(false);

  // this state have test messages
  // const [messages, setMessages] = useState<any>([
  //   { id: 1, text: "გამარჯობა!", sender: "bot" },
  //   { id: 2, text: "გამარჯობა! როგორ ხარ?", sender: "user" }
  // ]);

  return (
    <div className="flex justify-center min-h-screen">
      <MyContext.Provider
        value={{
          isFocused,
          setIsFocused,
          isHide,
          setIsHide,
          isMessage,
          setIsMessage,
          isSign,
          setIsSign,
          isSignedInGoogle,
          setIsSignedInGoogle,
          email,
          setEmail,
          isSignOut,
          setIsSignOut,
          isProfile,
          setIsProfile,
          isSignedInGithub,
          setIsSignedInGithub,
          userName,
          setUserName,
          isSocial,
          setIsSocial,
          isEmail,
          setIsEmail,
          name,
          setName,
          validEmail,
          setValidEmail,
          message,
          setMessage,
          isButtonDisabled,
          setIsButtonDisabled,
          successMessage,
          setSuccessMessage,
          newMessage,
          setNewMessage,
          isChatVisible,
          setIsChatVisible

          // messages,
          // setMessages
        }}>
        <Header />
        <About />
        <Ask />
        <Sign />
        <SignOut />
        <Profile />
        <Social />
        <Email />
        <Submit />
        <Cursor />
        {/* <Message /> */}
      </MyContext.Provider>
    </div>
  );
}

export default App;
