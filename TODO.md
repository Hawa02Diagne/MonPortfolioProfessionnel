# TODO — MonPortfolioProfessionnel

- [ ] Corriger l’envoi Firestore du formulaire contact (HTTP 405)
  - [x] Diagnostic : 405 observé côté navigation/submit
  - [x] Changement formulaire dans `index.html` (method POST -> GET, action -> "")
  - [x] Renforcement anti-submit dans `formulaire-contact.js` (preventDefault + stopImmediatePropagation sur submit + click)
  - [ ] Vérifier que `formulaire-contact.js` se charge (logs console)
  - [ ] Tester : formulaire → aucun reload + message “Envoi en cours…” puis succès/erreur Firestore

- [ ] Afficher les messages envoyés depuis Firebase dans le tableau de bord
  - [ ] Ajouter un conteneur HTML (section/tableau) pour la liste des messages
  - [ ] Dans `formulaire-contact.js`, lire Firestore collection `messages` et afficher (top 20) trié par `date` desc
  - [ ] Utiliser `onSnapshot` pour afficher en temps réel

- [x] Ajouter un script dédié dashboard (onSnapshot) sans toucher formulaires contact/commentaires
- [x] Brancher `dashboard.js` dans `index.html`
- [ ] Sécuriser `script.js` contre les erreurs si `likeCount` n’existe pas
- [ ] Micro-améliorations accessibilité (focus visible / aria sur bouton scroll)
- [ ] Tester manuellement : soumission contact → apparition tableau de bord (top 20)


