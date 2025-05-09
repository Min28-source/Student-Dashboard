import { Navigate } from "react-router-dom";
import { auth } from "../firebase/initialization";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const Loggedin = ({ children }) => {
  const [isLoggedin, setIsLoggedIn] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true)
        setShouldRedirect(true)
      }else{
        setIsLoggedIn(false)
      }
    });
  }, []);

  if(isLoggedin === null) return <div>Loading....</div>

  if (shouldRedirect) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Loggedin;
