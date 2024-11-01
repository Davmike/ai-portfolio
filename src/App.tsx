import { MyContext } from "./Components/Context";
import Header from "./Components/Header";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <MyContext.Provider
        value={{

        }}>
        <Header />
      </MyContext.Provider>
    </div>
  );
}

export default App;
