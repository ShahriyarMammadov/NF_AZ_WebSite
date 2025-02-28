import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSU06sQk7QQMTiJZpr-l8SPxExzElpoVQ",
  authDomain: "nature-friends-3ed32.firebaseapp.com",
  projectId: "nature-friends-3ed32",
  storageBucket: "nature-friends-3ed32.firebasestorage.app",
  messagingSenderId: "914171153062",
  appId: "1:914171153062:web:f0f8f39de54e6463db0267",
  measurementId: "G-K1CB8B8LM5",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
