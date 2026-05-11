// commentaires.js
import { db } from "./firebase-config.js";
import {
    collection, addDoc, getDocs, query, orderBy, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
 
// === Référence aux éléments HTML ===
const form = document.getElementById("commentaire-form");
const liste = document.getElementById("commentaires-liste");
 
// === Charger les commentaires existants ===
async function chargerCommentaires() {
    const q = query(collection(db, "commentaires"), orderBy("date", "desc"));
    const snap = await getDocs(q);
 
    liste.innerHTML = "";
    snap.forEach(doc => {
        const c = doc.data();
        const div = document.createElement("div");
        div.className = "commentaire";
        div.innerHTML = `
            <strong>${c.auteur}</strong>
            <p>${c.texte}</p>
        `;
        liste.appendChild(div);
    });
}
 
// === Envoyer un nouveau commentaire ===
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const auteur = document.getElementById("auteur").value;
    const texte = document.getElementById("texte").value;
 
    try {
        await addDoc(collection(db, "commentaires"), {
            auteur, texte, date: serverTimestamp()
        });
        form.reset();
        chargerCommentaires(); // Rafraîchir la liste
    } catch (error) {
        console.error("Erreur :", error);
    }
});
 
// === Charger au démarrage ===
chargerCommentaires();

