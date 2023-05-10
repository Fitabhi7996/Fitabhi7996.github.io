let menuIcon=document.querySelector('#menu-icon')
let navbar=document.querySelector('#nav-menu')

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}




let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");

  header.classList.toggle('sticky', window.scrollY > 100);
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')

};

function handle(){
  window.open("https://drive.google.com/file/d/1bBdIKLH_SgdgGuZd9yIGWc71zK70gkCr/view?usp=share_link")
}
function github(){
  window.open("https://github.com/Fitabhi7996")
}
function linkedin(){
  window.open("https://www.linkedin.com/in/abhishek-ghodmare796/")
}

function Clarksusa(){
  window.open("https://idyllic-kangaroo-9a4232.netlify.app/")
}
function Clarksusa1(){
  window.open("https://github.com/Fitabhi7996/abject-history-7359")
}

function jiomart(){
  window.open("https://cute-licorice-d4ea0f.netlify.app/")
}
function jiomart1(){
  window.open("https://github.com/Fitabhi7996/safe-drain-4510")
}

function Adoreme(){
  window.open("https://creative-moonbeam-ae1a7c.netlify.app/")
}
function Adoreme1(){
  window.open("https://github.com/Fitabhi7996/eager-structure-3963")
}


function nord(){
  window.open("https://creative-cocada-00ba63.netlify.app/")
}
function nord1(){
  window.open("https://github.com/Fitabhi7996/bored-stretch-4407")
}


function flowers(){
  window.open("https://startling-cupcake-81c8da.netlify.app/")
}
function flowers1(){
  window.open("https://github.com/Fitabhi7996/violent-cobweb-6035")
}




//remove
