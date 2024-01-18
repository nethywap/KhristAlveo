let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');
let contactSection = document.querySelector('#contact');
menu.onclick = () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('open')
};

const sr = ScrollReveal({
  distance: '40px',
  duration: 2500, 
  reset: true
});
sr.reveal('.share', {
  duration: 1000,
  origin: 'right',
  distance: '50px',
  reset: true
});

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:400, origin: 'top'});
sr.reveal('.menu-btn',{delay:500, origin: 'right'});

sr.reveal('.home-text span',{delay:600, origin: 'top'});
sr.reveal('.home-text h1',{delay:680, origin: 'left'});
sr.reveal('.home-text p',{delay:750, origin: 'right'});
sr.reveal('.main-btn',{delay:860, origin: 'left'});

sr.reveal('.home-img',{delay:1000, origin: 'right'});

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll(".navbar a");

  navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Remove "active" class from all links
      navbarLinks.forEach(function (otherLink) {
        otherLink.classList.remove("active");
      });

      // Add "active" class to the clicked link
      link.classList.add("active");
    });
  });

  // Get the current page URL
  const currentPage = window.location.href;

  // Check if the current page is the contact.html page
  if (currentPage.includes("contact.html")) {
    // Remove "active" class from Home link
    document.querySelector(".navbar a[href='index.html']").classList.remove("active");
  } else {
    // Remove "active" class from Contact link
    document.querySelector(".navbar a[href='contact.html']").classList.remove("active");
  }
});



