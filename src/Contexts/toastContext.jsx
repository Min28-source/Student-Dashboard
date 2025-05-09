import { createContext, useContext } from "react";
import { toast } from "react-toastify";

const toastContext = createContext();

export function useToast() {
  return useContext(toastContext);
}

export function ToastProvider({ children }) {
  const showSuccess = (message) => {
    toast.success(message, { position: "top-center" });
  };

  const showWarning = (message) => {
    toast.warning(message, { position: "top-center" });
  };

  const showError = (message) => {
    toast.error(message, { position: "top-center" });
  };


return (
  <toastContext.Provider value={{ showSuccess, showWarning, showError }}>
    {children}
  </toastContext.Provider>
);
}