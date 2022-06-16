// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAQHhXoIjIdwqjrv4FfkODDKMS8dTSRchY",
  // authDomain: "banking-app-3d4c1.firebaseapp.com",
  // projectId: "banking-app-3d4c1",
  // storageBucket: "banking-app-3d4c1.appspot.com",
  // messagingSenderId: "88278325519",
  // appId: "1:88278325519:web:90469e98c65f89142d867a"

  apiKey: "AIzaSyCYG35wxT6iqaLh5i8KjHR1dJlQHiLh_38",
  authDomain: "banking-app-908ae.firebaseapp.com",
  projectId: "banking-app-908ae",
  storageBucket: "banking-app-908ae.appspot.com",
  messagingSenderId: "389605365183",
  appId: "1:389605365183:web:40535c2830ba2019473d0a"

  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN ,
  // projectId: process.env.PROJECT_ID ,
  // storageBucket: process.env.STORAGE_BUCKET ,
  // messagingSenderId: process.env.SENDER_ID ,
  // appId: process.env.APP_ID 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);