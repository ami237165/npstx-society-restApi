// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfIPiVqCLoKadkrTqFeBXflbbrERrcCaQ",
  authDomain: "societyfiles-8f8ac.firebaseapp.com",
  projectId: "societyfiles-8f8ac",
  storageBucket: "societyfiles-8f8ac.appspot.com",
  messagingSenderId: "403757236259",
  appId: "1:403757236259:web:5d1cd913975ba92915b196"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);