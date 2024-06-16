import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form className="w-4/12 absolute p-16 mt-20 bg-black bg-opacity-85 my-36 mx-auto right-0 left-0 text-white rounded-md">
        <h1 className="font-bold pt-0 text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-2 w-full bg-gray-700 bg-opacity-60 rounded-md border border-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 bg-opacity-60 rounded-md border border-gray-500"
        />
        <button className="p-2 my-4 bg-red-600 w-full rounded-md">
          Sign In
        </button>
        <p className="text-center">OR</p>
        <button className="p-2 my-4 bg-gray-400 bg-opacity-40 w-full rounded-md">
          Use a sign-in code
        </button>
        <p className="text-center py-2">Forgot password?</p>
        <div>
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="h-5 w-5 rounded"
          />
          <span className="px-4">Remember me</span>
        </div>
        <p className="py-4">New to Netflix? Sign up now.</p>
        <p className="text-sm text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default Login;
