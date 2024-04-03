import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB66S09fZ9Jh_S4X2hKnH9-2tbxv8FTAAc",
  authDomain: "web-scraper-c08b1.firebaseapp.com",
  projectId: "web-scraper-c08b1",
  storageBucket: "web-scraper-c08b1.appspot.com",
  messagingSenderId: "381200409184",
  appId: "1:381200409184:web:14a948696ba650d6911905",
};

// Initialize Firebase
// setup for SSR application

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
