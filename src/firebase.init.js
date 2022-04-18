import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJJB_cMiN2_ofLx1LJPc-wQO8pd9AqVr0",
  authDomain: "adonis-and-associates.firebaseapp.com",
  projectId: "adonis-and-associates",
  storageBucket: "adonis-and-associates.appspot.com",
  messagingSenderId: "306413196477",
  appId: "1:306413196477:web:d214f0f27b9aa6c9e193d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;