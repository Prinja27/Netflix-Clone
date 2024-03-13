import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg "
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute mt-36 mx-auto right-0 left-0 text-white bg-black p-4 bg-opacity-80 rounded-md">
        <h1 className="font-bold text-3xl py-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            className="p-4 my-4 rounded-md w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-4 rounded-md w-full bg-gray-700"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-4 my-4 rounded-md w-full bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 rounded-lg bg-red-700 w-full">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignUp}>
          {isSignUp
            ? "Already Registered ? Sign In"
            : "New to Netflix ? Sign Up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
