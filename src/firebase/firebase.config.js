// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG69gHpmmUeIX-q-3EaAHuwjjq4fUKzV8",
  authDomain: "project-counselling-site.firebaseapp.com",
  projectId: "project-counselling-site",
  storageBucket: "project-counselling-site.appspot.com",
  messagingSenderId: "294299445401",
  appId: "1:294299445401:web:5bf955a298205c722e7008",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
