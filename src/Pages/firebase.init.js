// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SEND,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyBthVSdIQgHelCddR1oqb0UTgLdWPjsREg",
  authDomain: "august-rain-cb258.firebaseapp.com",
  projectId: "august-rain-cb258",
  storageBucket: "august-rain-cb258.appspot.com",
  messagingSenderId: "510286996210",
  appId: "1:510286996210:web:9dfc8b63cc8b31babb666b",
  measurementId: "G-RT6JG6DDP4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
const analytics = getAnalytics(app);