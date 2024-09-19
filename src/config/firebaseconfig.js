import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBJFt-C6JJzfaNM3LNf1BY3zgYad-F6p9E",
  authDomain: "todo-app-fa820.firebaseapp.com",
  projectId: "todo-app-fa820",
  storageBucket: "todo-app-fa820.appspot.com",
  messagingSenderId: "527469173045",
  appId: "1:527469173045:web:539be7a2d6d9fdf26bd47c",
  measurementId: "G-64H7S91KH2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
