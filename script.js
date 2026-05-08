// MENU MOBILE

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// COPYRIGHT AUTO

document.getElementById("year").textContent =
new Date().getFullYear();

// ANIMATION SCROLL

const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

hiddenElements.forEach((el) =>
observer.observe(el));

// BOUTON RETOUR HAUT

const scrollBtn =
document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    scrollBtn.style.display = "block";

  }else{

    scrollBtn.style.display = "none";

  }

});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({

    top:0,
    behavior:"smooth"

  });

});

// =========================
// MENU MOBILE
// =========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// =========================
// ANNEE AUTOMATIQUE
// =========================

document.getElementById("year").textContent =
new Date().getFullYear();

// =========================
// BOUTON J'AIME
// =========================

let likes = 0;

function likePortfolio() {

  likes++;

  document.getElementById("likeCount")
  .textContent = likes;

}

// =========================
// COMMENTAIRES
// =========================

function addComment() {

  const username =
  document.getElementById("username").value;

  const comment =
  document.getElementById("commentInput").value;

  if(username === "" || comment === "") {

    alert("Veuillez remplir tous les champs.");

    return;

  }

  const commentsList =
  document.getElementById("commentsList");

  const commentCard =
  document.createElement("div");

  commentCard.classList.add("comment-card");

  commentCard.innerHTML = `

    <h4>${username}</h4>

    <p>${comment}</p>

  `;

  commentsList.prepend(commentCard);

  // vider les champs

  document.getElementById("username").value = "";
  document.getElementById("commentInput").value = "";

}