import "../index.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import ChatPage from "./ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
