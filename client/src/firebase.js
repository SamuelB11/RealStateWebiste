import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "realstate-8db9c.firebaseapp.com",
  projectId: "realstate-8db9c",
  storageBucket: "realstate-8db9c.appspot.com",
  messagingSenderId: "414568828628",
  appId: "1:414568828628:web:a839362aaddb16c065f541",
  measurementId: "G-RFHV85F85Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
