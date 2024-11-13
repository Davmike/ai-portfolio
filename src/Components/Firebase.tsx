// Firebase.js - Firebase ინტეგრაცია

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

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
const githubProvider = new GithubAuthProvider();

// Google რეგისტრაციის ფუნქცია
export const signInWithGoogle = () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            const email = result.user.email;
            // მონაცემების შენახვა LocalStorage-ში
            localStorage.setItem("email", email ?? "");

            return { email };
        })
        .catch((error) => {
            console.error("Error during sign-in: ", error);
            throw error;
        });
};



// Github რეგისტრაციის ფუნქცია
export const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider)
        .then((result) => {
            const displayName = result.user.displayName;

            // მონაცემების შენახვა LocalStorage-ში
            localStorage.setItem("displayName", displayName ?? "");

            return { displayName };
        })
        .catch((error) => {
            console.error("Error during GitHub sign-in: ", error);
            throw error;
        });
};