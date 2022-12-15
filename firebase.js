import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCYUb57dZugUKssRs8Vq_gAimg0pQb99o",
  authDomain: "uber-next-clone-live-a3f9c.firebaseapp.com",
  projectId: "uber-next-clone-live-a3f9c",
  storageBucket: "uber-next-clone-live-a3f9c.appspot.com",
  messagingSenderId: "617141328975",
  appId: "1:617141328975:web:0f96f7f3ccfac4cc779e3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = new getAuth();

export { app, provider, auth };