// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbW5yyD_FNH7LqAryE57atDcwEW_QMrls",
    authDomain: "my-emailpassword-auth.firebaseapp.com",
    projectId: "my-emailpassword-auth",
    storageBucket: "my-emailpassword-auth.appspot.com",
    messagingSenderId: "796905615046",
    appId: "1:796905615046:web:b8aa7c62ee4a033842f1c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;