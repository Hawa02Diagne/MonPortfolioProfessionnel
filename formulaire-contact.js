// formulaire-contact.js

import { db } from "./firebase-config.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Récupération du formulaire

const form = document.getElementById("contact-form");

const status = document.getElementById("form-status");

// Soumission du formulaire

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  // Récupération des valeurs

  const nom = document.getElementById("nom").value;

  const email = document.getElementById("email").value;

  const message = document.getElementById("message").value;

  // Message en cours

  status.textContent = "Envoi en cours...";

  status.style.color = "#999";

  try {

    // Envoi vers Firestore

    await addDoc(collection(db, "messages"), {

      nom: nom,

      email: email,

      message: message,

      date: serverTimestamp()

    });

    // Succès

    status.textContent = "✓ Message envoyé avec succès !";

    status.style.color = "green";

    // Réinitialiser le formulaire

    form.reset();

  } catch (error) {

    console.error("Erreur Firestore :", error);

    // Erreur

    status.textContent = "✗ Une erreur est survenue.";

    status.style.color = "red";
  }

});