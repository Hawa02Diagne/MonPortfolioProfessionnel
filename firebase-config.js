// firebase-config.js
// IMPORTANT: ce site est servi en statique (sans bundler). On charge donc Firebase uniquement via CDN.

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVB1JABOSZNf7fNoNB9kpsaPpQf9uNM1Y",
  authDomain: "portfolioprofessionnel-e1046.firebaseapp.com",
  projectId: "portfolioprofessionnel-e1046",
  storageBucket: "portfolioprofessionnel-e1046.firebasestorage.app",
  messagingSenderId: "115544340376",
  appId: "1:115544340376:web:2338b79968323425f8dded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance (used by formulaire-contact.js)
export const db = getFirestore(app);


