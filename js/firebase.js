// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsaPcwFe81LbmVq0dCaCYKXJFMthmhnyE",
  authDomain: "tiendacesde.firebaseapp.com",
  projectId: "tiendacesde",
  storageBucket: "tiendacesde.appspot.com",
  messagingSenderId: "503665889239",
  appId: "1:503665889239:web:04ee90acd355f29b8cc592",
  measurementId: "G-7X88C3QCHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
