import { MyContext } from "./Components/Context";
import Header from "./Components/Header";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <MyContext.Provider
        value={{

        }}>
        <Header />
      </MyContext.Provider>
    </div>
  );
}

export default App;
