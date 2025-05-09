import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5vXxoX6TNxzkQ_641Biz0FXwoEEXq_WM",
  authDomain: "playground-69817.firebaseapp.com",
  databaseURL: "https://playground-69817-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "playground-69817",
  storageBucket: "playground-69817.firebasestorage.app",
  messagingSenderId: "118617709553",
  appId: "1:118617709553:web:3a292a49729c1ed2780250"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
