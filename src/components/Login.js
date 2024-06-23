import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/ogw/AF2bZyjUwHaVrkoW_BAY_Bd1sfRV8i09TzLqTt-Tze31CLUORak=s64-c-mo",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute p-16 mt-20 bg-black bg-opacity-85 my-36 mx-auto right-0 left-0 text-white rounded-md"
      >
        <h1 className="font-bold pt-0 text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 bg-opacity-60 rounded-md border border-gray-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-2 w-full bg-gray-700 bg-opacity-60 rounded-md border border-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 bg-opacity-60 rounded-md border border-gray-500"
        />
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-600 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <>
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
                className="h-4 w-4 rounded"
              />
              <span className="px-4">Remember me</span>
            </div>
          </>
        )}
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already Registered! Sign In now."}
        </p>
        <p className="text-sm text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default Login;
