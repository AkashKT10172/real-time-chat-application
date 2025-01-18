import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
import "./App.css";
import backgroundImage from "./components/ui/background.jpg";

function App() {
  return (
    <>
      <div
        className="App"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh", // Ensure it covers the whole page
        }}
      >
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/chats" Component={Chatpage} />
        </Routes>
      </div>
    </>
  );
}

export default App;
