// /* spoilers about */
let toggleSpoilerIcon = function(event) {
  console.log(event.target);
  console.log(event.currentTarget);
  let hor = event.currentTarget.querySelector('.hor');
  let vert = event.currentTarget.querySelector('.vert');
  let circ = event.currentTarget.querySelector('.circ');
  
  this.classList.toggle('active');

  if (!event.currentTarget.classList.contains('active')) {
    vert.style.display="inline";
    circ.style.stroke="#505050";
    hor.style.stroke="#505050";
  } else {
    vert.style.display="none";
    circ.style.stroke="#ff0033";
    hor.style.stroke="#ff0033";
  }
}

document.querySelectorAll('.spoiler').forEach((el) => el.addEventListener('click', toggleSpoilerIcon));



// burger menu

let navHidden = document.getElementById('nav_hidden_pannel');
let burger = document.getElementById('burger');

let toggleNav = function() {
  navHidden.classList.toggle('invisible');
  burger.classList.toggle('burger_active');
}

document.querySelector('.nav-burger').addEventListener('click', toggleNav);

    // close hidden menu when wide screen
let mediaQ = window.matchMedia("(max-width: 991px)");

function myFunction(mediaQ) {
  if (!mediaQ.matches) { 
    if (!navHidden.classList.contains('invisible')) // If media query matches
    toggleNav()
   }
}

mediaQ.addListener(myFunction);




