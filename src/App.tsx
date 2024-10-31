import { MyContext } from "./Components/Context";
import Menu from "./Components/Menu";


function App() {

  return (
    <>
      <MyContext.Provider
        value={{
        }}
      >
        <Menu />
      </MyContext.Provider>
    </>
  );
}

export default App;