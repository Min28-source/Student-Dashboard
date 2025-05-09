import { Navigate } from "react-router-dom";
import { auth } from "../firebase/initialization";
import { onAuthStateChanged } from "firebase/auth";
import { useToast } from "../Contexts/toastContext";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [isLoggedin, setIsLoggedIn] = useState(null);
  const { showWarning } = useToast();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
        setShouldRedirect(true)
      }
    });
  }, []);

  if(isLoggedin === null) return <div>Loading....</div>

  if (shouldRedirect) {
    showWarning("You must be logged in first!");
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
