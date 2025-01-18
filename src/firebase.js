import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwQYwvBrUUjrFnT0R9P3WDr4NT8KKe5cs",
  authDomain: "test-610e2.firebaseapp.com",
  projectId: "test-610e2",
  storageBucket: "test-610e2.firebasestorage.app",
  messagingSenderId: "311297248660",
  appId: "1:311297248660:web:c973ae378fa49591c15381",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
