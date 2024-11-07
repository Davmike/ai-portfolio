// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_wGZQQTlvgyg4krsOKg32tOMg9GYnfgk",
    authDomain: "ai-portfolio-affbc.firebaseapp.com",
    projectId: "ai-portfolio-affbc",
    storageBucket: "ai-portfolio-affbc.firebasestorage.app",
    messagingSenderId: "939288623406",
    appId: "1:939288623406:web:1f5366e51798614144a2bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name ?? "");
        localStorage.setItem("email", email ?? "");
        localStorage.setItem("profilePic", profilePic ?? "");

    }).catch((error) => {
        console.log(error);
    });
};