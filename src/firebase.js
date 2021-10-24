// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBImtVz8z-yUfN03Xjy-GCkpQlrY5OrxoE",
  authDomain: "homework-estimator.firebaseapp.com",
  projectId: "homework-estimator",
  storageBucket: "homework-estimator.appspot.com",
  messagingSenderId: "834032959671",
  appId: "1:834032959671:web:ea99076519ef855e4dcd32",
  measurementId: "G-63EFTYY6B9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;