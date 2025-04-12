// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD55uYtn0ntgrC-iaO34ebEBGd_lvSO-9I",
  authDomain: "my-porfolio-51864.firebaseapp.com",
  databaseURL: "https://my-porfolio-51864-default-rtdb.firebaseio.com",
  projectId: "my-porfolio-51864",
  storageBucket: "my-porfolio-51864.firebasestorage.app",
  messagingSenderId: "316880480532",
  appId: "1:316880480532:web:b02ea850c907a5d3ae7a01",
  measurementId: "G-9GVEZT7XWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the Firebase app and other services as needed
export { app, analytics };
