import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import About from "./Components/About";

function App() {
  return (
    <div className="flex justify-center min-h-screen">
      <MyContext.Provider
        value={{

        }}>
        <Header />
        <About />
      </MyContext.Provider>
    </div>
  );
}

export default App;
