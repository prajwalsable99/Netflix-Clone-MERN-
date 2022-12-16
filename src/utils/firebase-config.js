import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA5U7am8oR3GJDO5i3XztlZg0w9xJJLzNo",
  authDomain: "netflix-clone-23ef2.firebaseapp.com",
  projectId: "netflix-clone-23ef2",
  storageBucket: "netflix-clone-23ef2.appspot.com",
  messagingSenderId: "274081910036",
  appId: "1:274081910036:web:51ac95b5a8280549d6c601",
  measurementId: "G-0J0F5YRRX5"
};


const app = initializeApp(firebaseConfig);

const firebaseAuth =getAuth(app);

export default firebaseAuth;

// const analytics = getAnalytics(app);