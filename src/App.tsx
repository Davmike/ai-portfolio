import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import About from "./Components/About";
import Ask from "./Components/Ask";
import { useState } from "react";
// import Message from "./Components/Message";

function App() {
  // this is state which i use in ask compnent to make input background show and hide on cursor click
  const [isFocused, setIsFocused] = useState<boolean>(false);
  // this state show and hide about section
  const [isHide, setIsHide] = useState<boolean>(false);
  // this state show and hide message components
  const [isMessage, setIsMessage] = useState<boolean>(false);

  return (
    <div className="flex justify-center min-h-screen">
      <MyContext.Provider
        value={{
          isFocused,
          setIsFocused,
          isHide,
          setIsHide,
          isMessage,
          setIsMessage
        }}>
        <Header />
        <About />
        <Ask />
        {/* <Message /> */}
      </MyContext.Provider>
    </div>
  );
}

export default App;
