// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import { ToastContainer } from "react-toastify";
import { ToastProvider } from "./Contexts/toastContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/errorPage.jsx";
import Add from "./Pages/Add.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import Loggedin from "./Components/Loggedin.jsx";
import Details from "./Pages/Details.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "add",
        element: (
          <ProtectedRoute>
            <Add />
          </ProtectedRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <Loggedin>
            <Signup/>
          </Loggedin>
        ),
      },
      {
        path: "login",
        element: (
         <Loggedin>
          <Login/>
         </Loggedin>
        ),
      },
      {
        path: "/student/:rollNo",
        element: (
          <ProtectedRoute>
           <Details/>
          </ProtectedRoute>
        )
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <ToastProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ToastProvider>
  // </StrictMode>
);
