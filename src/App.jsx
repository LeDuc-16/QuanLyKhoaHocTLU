import { useState } from "react";
import FormLogin from "./assets/LoginPage/FormLogin";
import "./index.css";
import Welcome from "./assets/LoginPage/Welcome";

function App() {

  return (
    <div className="min-h-screen custom-gradient flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl px-5 gap:5 md:gap-60 m-2">
        <Welcome></Welcome>
        <FormLogin></FormLogin>
      </div>
    </div>
  );
}

export default App;
