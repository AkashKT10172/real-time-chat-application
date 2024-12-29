import { Button } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <>
    <Routes>
      <Route path = '/' Component={Homepage}/>
      <Route path = '/chats' Component={Chatpage}/>
    </Routes>
    </>
  );
}

export default App;
