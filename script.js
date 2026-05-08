// MENU MOBILE

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// ==========================
// COMMENTAIRES
// ==========================

function addComment(){

  const username =
  document.getElementById("username").value;

  const commentInput =
  document.getElementById("commentInput").value;

  if(username === "" || commentInput === ""){

    alert("Veuillez remplir les champs");

    return;
  }

  const commentsList =
  document.getElementById("commentsList");

  // CREATION DU COMMENTAIRE

  const comment =
  document.createElement("div");

  comment.classList.add("comment");

  comment.innerHTML = `

    <h4>${username}</h4>

    <p>${commentInput}</p>

  `;

  commentsList.prepend(comment);

  // VIDER LES CHAMPS

  document.getElementById("username").value = "";

  document.getElementById("commentInput").value = "";
}

// ==========================
// SYSTEME DE LIKE
// ==========================

let likes = 0;

function likePortfolio(){

  likes++;

  document.getElementById("likeCount")
  .textContent = likes;
}

// COPYRIGHT

const year =
document.getElementById("year");

year.textContent =
new Date().getFullYear();

// SLIDER ELECTION

const images = [

  "Election.png",

  "planDacces.png",

  "parrainage.png",

  "tableuabord.png"

];

let current = 0;

const slide =
document.getElementById("slide");

// IMAGE SUIVANTE

function nextSlide(){

  current++;

  if(current >= images.length){

    current = 0;
  }

  slide.src = images[current];
}

// IMAGE PRECEDENTE

function prevSlide(){

  current--;

  if(current < 0){

    current = images.length - 1;
  }

  slide.src = images[current];
}