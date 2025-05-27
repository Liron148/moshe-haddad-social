import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFQGCY1N1UJ24RNR6Mje0jXSDv-1P6YnU",
  authDomain: "sosial-74b8c.firebaseapp.com",
  projectId: "sosial-74b8c",
  storageBucket: "sosial-74b8c.firebasestorage.app",
  messagingSenderId: "973388181195",
  appId: "1:973388181195:web:cb912edda045a825b2f54e",
  measurementId: "G-DG6DK7B7C6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
