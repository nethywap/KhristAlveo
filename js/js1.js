//form script
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> 
  Phone Number: ${phone.value}<br> Message: ${mess.value}<br>`;

  Email.send({
    SecureToken :"af5fab62-6bd3-497c-926a-240cb44c20bd",
    To: 'kdiokno.alveo@gmail.com',
    From: "summonerjuan12@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if(message === "OK") {
        Swal.fire({
          title: "Thank you!",
          text: "Sent Successfully!",
          icon: "success"
        });
      }
    }
  );
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if(item.value === ""){
      item.classList.add("error");
      item.parentElement.classList.add("error");
    } else {
      item.classList.remove("error");
      item.parentElement.classList.remove("error");
    }
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value !== "") {
      errorTxtEmail.innerText = "Enter a valid email address";
    } else {
      errorTxtEmail.innerText = "Email Address can't be blank";
    }
    return false;
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
    return true;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (checkEmail() && !fullName.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
    console.log("OK");
    sendEmail();
    form.reset();
  }
});

//header script
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

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:400, origin: 'top'});
sr.reveal('.menu-btn',{delay:500, origin: 'right'});

sr.reveal('.contact h2',{delay:700, origin: 'left'});
sr.reveal('.contact form',{delay:900, origin: 'right'});


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
    // Add "active" class to Contact link
    document.querySelector(".navbar a[href='contact.html']").classList.add("active");
    // Remove "active" class from Home link
    document.querySelector(".navbar a[href='index.html']").classList.remove("active");
  } else {
    // Remove "active" class from Contact link
    document.querySelector(".navbar a[href='contact.html']").classList.remove("active");
  }
});

