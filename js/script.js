// script.js

// Rolagem suave para os links do menu
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
}

// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) { // Mostra a partir de 400px de scroll
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
mybutton.addEventListener('click', topFunction);

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Scroll suave
  });
}