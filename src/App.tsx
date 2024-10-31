import { MyContext } from "./Components/Context";
import Menu from "./Components/Menu";
import Ask from "./Components/Ask";
import Message from "./Components/Message";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <MyContext.Provider
        value={{
        }}>
        <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
          <Menu />
          <div className="p-4 space-y-4">
            {/* Example Messages */}
            <Message text="Hello! How can I assist you today?" isUser={false} />
            <Message text="Tell me about yourself." isUser={true} />
          </div>
          <Ask />
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;
