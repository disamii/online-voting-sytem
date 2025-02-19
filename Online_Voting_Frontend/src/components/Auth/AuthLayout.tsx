import React, { useState } from "react";
import Login from "./Login.js";
import SignupText from "./SignupText.js";
import Signup from "./Signup.js";
import "../../styling/slidingAuth.css";
import LoginText from "./LoginText.js";

const AuthLayout: React.FC = () => {
  const [swap, setSwap] = useState(false);

  const handleSwap = () => {
    setSwap((prev) => !prev);
  };

  return (
    <div className="bg-[url('src/assets/pattern-bg.svg')] h-screen flex items-center justify-center">
      <div className={`auth-container ${swap ? "swap" : ""}`}>
        <div className="auth-panel login-panel z-50">
          {swap ? <LoginText swapper={handleSwap} /> :<SignupText swapper={handleSwap} /> }
        </div>
        <div className="auth-panel signup-panel">
          {swap ? <Signup /> : <Login/>}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
