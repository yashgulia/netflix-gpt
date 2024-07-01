import React, { useEffect } from "react";
import Logo from "../img/Netflix_Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="absolute py-4 px-10 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-28" src={Logo} alt="Logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-8 h-8" alt="user" src={user?.photoURL} />
          <button className="text-white pl-2" onClick={handleSignOut}>
            ▼
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
