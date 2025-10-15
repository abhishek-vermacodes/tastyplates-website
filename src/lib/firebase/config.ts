import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6N0yx5BDcWrhrIsEQV9j5SITeuXXY3jM",
  authDomain: "tastyplates-666a2.firebaseapp.com",
  projectId: "tastyplates-666a2",
  storageBucket: "tastyplates-666a2.appspot.com",
  messagingSenderId: "771256743565",
  appId: "1:771256743565:web:612136eaa9c98f9f3854c4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
