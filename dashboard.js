import { db } from "./firebase-config.js";

import {
  collection,
  query,
  orderBy,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const listEl = document.getElementById("messagesList");
const statusEl = document.getElementById("messagesStatus");

function formatDate(value) {
  if (!value) return "";
  // Firestore Timestamp has toDate()
  if (typeof value.toDate === "function") return value.toDate().toLocaleString();
  // Fallback (in case date is serialized)
  try {
    return new Date(value).toLocaleString();
  } catch {
    return "";
  }
}

function renderMessage(doc) {
  const c = doc.data() || {};
  const nom = (c.nom || "").toString();
  const email = (c.email || "").toString();
  const message = (c.message || "").toString();
  const date = c.date;

  // XSS-safe: use textContent for user-provided values
  const wrap = document.createElement("div");
  wrap.className = "dashboard-message";

  const title = document.createElement("h4");
  title.textContent = nom ? nom : "Message";

  const meta = document.createElement("p");
  meta.className = "dashboard-meta";
  meta.textContent = email ? `Email: ${email}` : "";

  const body = document.createElement("p");
  body.className = "dashboard-body";
  body.textContent = message;

  const dt = document.createElement("p");
  dt.className = "dashboard-date";
  dt.textContent = date ? `Reçu: ${formatDate(date)}` : "";

  wrap.appendChild(title);
  if (meta.textContent) wrap.appendChild(meta);
  wrap.appendChild(body);
  if (dt.textContent) wrap.appendChild(dt);

  return wrap;
}

if (!listEl) {
  // Rien à faire si l’élément n’existe pas.
  // (On évite d’éventuelles erreurs si la section dashboard est retirée.)
  console.warn("[dashboard.js] #messagesList introuvable");
}

if (listEl && statusEl) {
  statusEl.textContent = "Chargement des messages...";
}

const q = query(collection(db, "messages"), orderBy("date", "desc"));

onSnapshot(
  q,
  (snap) => {
    if (!listEl) return;

    const docs = snap.docs || [];
    const topDocs = docs.slice(0, 20);

    listEl.innerHTML = "";

    if (topDocs.length === 0) {
      if (statusEl) statusEl.textContent = "Aucun message pour le moment.";
      return;
    }

    if (statusEl) statusEl.textContent = "Messages mis à jour en temps réel.";

    const frag = document.createDocumentFragment();
    for (const doc of topDocs) {
      frag.appendChild(renderMessage(doc));
    }
    listEl.appendChild(frag);
  },
  (error) => {
    console.error("[dashboard.js] Erreur Firestore:", error);
    if (statusEl) {
      statusEl.textContent = "Erreur lors du chargement des messages.";
      statusEl.style.color = "red";
    }
  }
);

