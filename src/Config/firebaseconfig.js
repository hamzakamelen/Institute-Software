// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu1CTgbczgYfgF_-DRusmM8BfX4RvBfaM",
  authDomain: "software-cfec3.firebaseapp.com",
  databaseURL: "https://software-cfec3-default-rtdb.firebaseio.com",
  projectId: "software-cfec3",
  storageBucket: "software-cfec3.appspot.com",
  messagingSenderId: "813588305442",
  appId: "1:813588305442:web:2293c821a25922f2e09c7b",
  measurementId: "G-L14MM6Q989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;