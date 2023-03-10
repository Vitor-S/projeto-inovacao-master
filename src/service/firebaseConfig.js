import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcxjUQ-lohjKvps-RDWlzxzE4JyM6jIfs",
  authDomain: "projeto-inovacao-2aa68.firebaseapp.com",
  projectId: "projeto-inovacao-2aa68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()