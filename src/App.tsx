import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import About from "./Components/About";
import Ask from "./Components/Ask";
import { useState } from "react";
// import Message from "./Components/Message";
import Sign from "./Components/Sign";
// import Profile from "./Components/Profile";
import SignOut from "./Components/SignOut";

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

  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [profilePic, setProfilePic] = useState<any>(null);
  const [email, setEmail] = useState<any>(null);

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
          isSignedIn,
          setIsSignedIn,
          profilePic,
          setProfilePic,
          email,
          setEmail,
          isSignOut,
          setIsSignOut
        }}>
        <Header />
        <About />
        <Ask />
        <Sign />
        <SignOut />
        {/* <Profile /> */}
        {/* <Message /> */}
      </MyContext.Provider>
    </div>
  );
}

export default App;
