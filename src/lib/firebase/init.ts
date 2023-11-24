// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZVjouBDZnsWcLxr_QFS0srgJgjDa7XJI",
  authDomain: "my-next-app-3a4a3.firebaseapp.com",
  projectId: "my-next-app-3a4a3",
  storageBucket: "my-next-app-3a4a3.appspot.com",
  messagingSenderId: "843312525610",
  appId: "1:843312525610:web:cc99723282d1addc542e53",
  measurementId: "G-ECLDRET29M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
