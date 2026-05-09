const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ANIMATION SECTIONS */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

hiddenElements.forEach((el) => observer.observe(el));

/* BOUTON RETOUR HAUT */

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){
    scrollBtn.style.display = "block";
  }

  else{
    scrollBtn.style.display = "none";
  }

});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

/* PROJECTS: clic sur la card => photo suivante */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    // Si on clique sur un lien (GitHub, bouton, etc.), on ne veut pas changer la galerie.
    if (e.target && e.target.closest && e.target.closest("a")) return;

    const gallery = card.querySelector(".project-gallery");
    if (!gallery) return;

    const imgs = Array.from(gallery.querySelectorAll(".project-gallery-img"));
    if (imgs.length <= 1) return;

    // Largeur d’une image (incluant le gap/scroll-snap)
    const firstImg = imgs[0];
    const itemWidth = firstImg.getBoundingClientRect().width;

    if (!itemWidth) return;

    const currentIndex = Math.round(gallery.scrollLeft / itemWidth);
    const nextIndex = (currentIndex + 1) % imgs.length;

    gallery.scrollTo({
      left: nextIndex * itemWidth,
      behavior: "smooth"
    });
  });
});

/* FOOTER YEAR */

document.getElementById("year").textContent =
new Date().getFullYear();

/* LIKE */

let likes = localStorage.getItem("likes") || 0;

document.getElementById("likeCount").textContent = likes;

function likePortfolio(){

  likes++;

  localStorage.setItem("likes", likes);

  document.getElementById("likeCount").textContent = likes;

}

/* COMMENTAIRES */

function addComment(){
  const username = document.getElementById("username").value.trim();
  const commentText = document.getElementById("commentInput").value.trim();

  if(username === "" || commentText === ""){
    alert("Veuillez remplir tous les champs");
    return;
  }

  const commentBox = document.createElement("div");
  commentBox.classList.add("comment");

  commentBox.innerHTML = `
    <h4>${username}</h4>
    <p>${commentText}</p>
  `;

  document.getElementById("commentsList").prepend(commentBox);

  document.getElementById("username").value = "";
  document.getElementById("commentInput").value = "";
}

