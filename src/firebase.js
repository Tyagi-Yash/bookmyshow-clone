
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDTO4nqhlCTOR1uHF5ok6A2IfBOZDBBmK0",
  authDomain: "bookmy-show-clone.firebaseapp.com",
  projectId: "bookmy-show-clone",
  storageBucket: "bookmy-show-clone.firebasestorage.app",
  messagingSenderId: "102861218151",
  appId: "1:102861218151:web:c5c9138118ff41a11d8fc2",
  measurementId: "G-P9R6SN5W5B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);