import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRout from "./router/AppRout";

function App() {
  return (
      <BrowserRouter>
        <AppRout />
      </BrowserRouter>
  );
}

export default App;