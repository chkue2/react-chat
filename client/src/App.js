import React from "react";
import { Routes, Route } from "react-router-dom";
import Join from "./pages/Join.js";
import Chat from "./pages/Chat.js";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Join />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
