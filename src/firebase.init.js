// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgo_6a9xM-0Th2eBKu3jtXzFKrTrxUnRU",
  authDomain: "sunshine-a33a1.firebaseapp.com",
  projectId: "sunshine-a33a1",
  storageBucket: "sunshine-a33a1.appspot.com",
  messagingSenderId: "208579360387",
  appId: "1:208579360387:web:52f376871b2fba36174db6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;