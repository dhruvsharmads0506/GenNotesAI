
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotes-ai-85d79.firebaseapp.com",
  projectId: "examnotes-ai-85d79",
  storageBucket: "examnotes-ai-85d79.firebasestorage.app",
  messagingSenderId: "506462852014",
  appId: "1:506462852014:web:c4db537a6f1da1054b2e3f"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}