// Firebase.js - Firebase ინტეგრაცია

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase კონფიგურაცია
const firebaseConfig = {
    apiKey: "AIzaSyC_wGZQQTlvgyg4krsOKg32tOMg9GYnfgk",
    authDomain: "ai-portfolio-affbc.firebaseapp.com",
    projectId: "ai-portfolio-affbc",
    storageBucket: "ai-portfolio-affbc.firebasestorage.app",
    messagingSenderId: "939288623406",
    appId: "1:939288623406:web:1f5366e51798614144a2bf"
};

// Firebase ინიციალიზაცია
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google რეგისტრაციის ფუნქცია
export const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            // მონაცემების შენახვა LocalStorage-ში
            localStorage.setItem("name", name ?? "");
            localStorage.setItem("email", email ?? "");
            localStorage.setItem("profilePic", profilePic ?? "");

            return { name, email, profilePic };
        })
        .catch((error) => {
            console.error("Error during sign-in: ", error);
            throw error;
        });
};
