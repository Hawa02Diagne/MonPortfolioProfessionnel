// formulaire-contact.js
import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

console.info("[contact-form] module chargé", { formExists: !!form, statusExists: !!status });

function setStatus(text, color) {
  if (!status) return;
  status.textContent = text;
  if (color) status.style.color = color;
}

function lockSubmit(e) {
  // Sécurité anti-navigation/POST natif (HTTP 405)
  if (e) {
    e.preventDefault();
    e.stopPropagation();

    // Empêcher les autres listeners potentiels
    if (typeof e.stopImmediatePropagation === "function") {
      e.stopImmediatePropagation();
    }
  }
  return false;
}

if (!form || !status) {
  console.error("[contact-form] Éléments manquants : form/status introuvables");
} else {
  // Fallback : même si un autre handler est présent, on bloque le submit.
  form.addEventListener("submit", async (e) => {
    // Bloque absolument tout comportement natif (évite POST => 405)
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      if (typeof e.stopImmediatePropagation === "function") {
        e.stopImmediatePropagation();
      }
    }

    lockSubmit(e);


    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    console.info("[contact-form] submit intercepté", { nom, email, messageLen: message.length });

    setStatus("Envoi en cours...", "gray");

    try {
      await addDoc(collection(db, "messages"), {
        nom,
        email,
        message,
        date: serverTimestamp(),
      });

      setStatus("✓ Message envoyé avec succès !", "green");
      form.reset();
    } catch (error) {
      console.error("[contact-form] Erreur Firestore :", error);
      setStatus("✗ Erreur, réessaie plus tard.", "red");
    }

    // Empêcher à nouveau toute soumission possible après traitement
    return false;
  });

  // Autre fallback : empêcher un click sur le bouton submit si jamais submit event ne se déclenche pas.
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      // Ne jamais laisser le click déclencher un submit natif => 405
      if (e) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof e.stopImmediatePropagation === "function") {
          e.stopImmediatePropagation();
        }
      }
      lockSubmit(e);
      return false;
    });
  }
}


