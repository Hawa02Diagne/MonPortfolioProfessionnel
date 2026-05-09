// MENU MOBILE

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// ANIMATION AU SCROLL

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

hiddenElements.forEach((el) => observer.observe(el));


// COPYRIGHT AUTOMATIQUE

document.getElementById("year").textContent =
new Date().getFullYear();


// BOUTON RETOUR EN HAUT

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


// LIKE

let likeCount = 0;

function likePortfolio(){

  likeCount++;

  document.getElementById("likeCount")
  .textContent = likeCount;

}


// COMMENTAIRES

function addComment(){

  const username =
  document.getElementById("username").value;

  const commentInput =
  document.getElementById("commentInput").value;

  if(username === "" || commentInput === ""){

    alert("Veuillez remplir tous les champs");

    return;

  }

  const commentBox =
  document.createElement("div");

  commentBox.classList.add("comment");

  commentBox.innerHTML = `

    <h4>${username}</h4>

    <p>${commentInput}</p>

  `;

  document.getElementById("commentsList")
  .appendChild(commentBox);

  document.getElementById("username").value = "";
  document.getElementById("commentInput").value = "";

}

// MENU MOBILE

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});