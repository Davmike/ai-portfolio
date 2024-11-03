import { MyContext } from "./Components/Context";
import Header from "./Components/Header";
import About from "./Components/About";
import Ask from "./Components/Ask";

function App() {
  return (
    <div className="flex justify-center min-h-screen">
      <MyContext.Provider
        value={{

        }}>
        <Header />
        <About />
        <Ask />
      </MyContext.Provider>
    </div>
  );
}

export default App;
