# 🎓 Student Dashboard

A React-based dashboard for managing a list of students. This application allows you to view, add, and filter students, with authentication powered by Firebase. Student data is fetched from a simulated API.

## 🚀 Features

- 🔒 **Login with Firebase Authentication**
- 📋 **View a List of Students** (Fetched via simulated mock API)
- ➕ **Add New Student** (Login required)
- 🔍 **Filter Students by Course**
- ✅ **Basic Form Validation** (Required fields, email format)

---

## 🛠️ Tech Stack

- **React** (with Hooks)
- **Firebase Auth**
- **Axios + Axios Mock Adapter**
- **React Router DOM**
- **Tailwind CSS** (or plain CSS - depending on your preference)

---


## 🔐 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project.
3. Enable **Email/Password** authentication under **Authentication > Sign-in method**
4. Create a **Web App** in the Firebase console.
5. Copy your Firebase config and replace it in `src/services/firebase.js`

```js
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

---


## 🧑‍💻 Running the App

To get started with the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/student-dashboard.git
    ```

2. Navigate to the project directory:
    ```bash
    cd student-dashboard
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Run the application:
    ```bash
    npm run dev
    ```

5. Open your browser and go to [http://localhost:5173](http://localhost:5173) to view the app.

