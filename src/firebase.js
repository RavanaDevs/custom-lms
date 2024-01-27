// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB5_QgpaBzpQF6RrZGfSCSlkvk3G7vv7c",
  authDomain: "toxi-lms.firebaseapp.com",
  projectId: "toxi-lms",
  storageBucket: "toxi-lms.appspot.com",
  messagingSenderId: "1054387953465",
  appId: "1:1054387953465:web:f1379177210f74a59092e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;