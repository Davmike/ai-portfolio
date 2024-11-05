import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import About from "./Components/About";
import Ask from "./Components/Ask";
import { useState } from "react";

function App() {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="flex justify-center min-h-screen">
      <MyContext.Provider
        value={{
          isFocused,
          setIsFocused
        }}>
        <Header />
        <About />
        <Ask />
      </MyContext.Provider>
    </div>
  );
}

export default App;
