// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getPerformance } from "@firebase/performance";
import { getAnalytics } from "@firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtG-LZiM3FyteFokRwQmEoLfnmOOWLax8",
  authDomain: "netdev-mrfzy.cloud",
  projectId: "website-portfolio-devops",
  storageBucket: "website-portfolio-devops.appspot.com",
  messagingSenderId: "854791135110",
  appId: "1:854791135110:web:c466ba3a88776d26739607",
  measurementId: "G-G0EL8VV7WB"
};

// Initialize Firebase
const app = initializeApp(app);
const performance = getPerformance(app);
const analytics = getAnalytics(app);