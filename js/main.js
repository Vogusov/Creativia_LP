// /* spoilers about */
let toggleSpoilerIcon = function(event) {
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
};

document.querySelectorAll('.spoiler').forEach(el => el.addEventListener('click', toggleSpoilerIcon));



// burger menu

let navHidden = document.getElementById('nav_hidden_pannel');
let burger = document.getElementById('burger');

let toggleNav = function() {
  navHidden.classList.toggle('invisible');
  burger.classList.toggle('burger_active');
};

document.querySelector('.nav-burger').addEventListener('click', toggleNav);


    // close hidden menu when wide screen
let mediaQ = window.matchMedia("(max-width: 991px)");

function checkMediaQ(mediaQ) {
  if (!mediaQ.matches) { 
    if (!navHidden.classList.contains('invisible')) // If media query matches
    toggleNav();
   }
}

mediaQ.addListener(checkMediaQ);


  // close hidden menu when link clicked
let navListLinks = document.querySelectorAll('.nav_hidden_pannel .nav__list__link');

function hideNavHidden() {
  toggleNav();
}

navListLinks.forEach(el => el.addEventListener('click',  hideNavHidden));



// portfolio 

let portfolioPicsWrapper = document.querySelector('.portfolio__pics__grid_wrapper');
console.log('portfolioPics: ', portfolioPicsWrapper);

let hoverBlack = `
<div id="hover_black" class="pic_hover">
  <div class="pic_hover__content">
    <div class="pic_plus">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="pic-plus" width="23"
                                        viewBox="0 0 100 100">
        <line class="pic-hor" x1="0" y1="50" x2="100" y2="50" stroke="#fff"
                                            stroke-width="30" />
        <line class="pic-vert" x1="50" y1="0" x2="50" y2="100" stroke="#fff"
                                           stroke-width="30" />
      </svg>
    </div>
    <span class="pic_name">disign name</span>
  </div>
</div>`

// function showHoverBlack(target) {
//   target.insertAdjacentHTML('afterbegin', hoverBlack);  
// }

// // portfolioPics.forEach(el => el.addEventListener('', showHoverBlack))

// portfolioPicsWrapper.onmouseover = function(event) {
//   let target = event.target;
//   showHoverBlack(target);
// };

// portfolioPicsWrapper.onmouseout = function(event) {
//   let target = event.target;
//   target.style.background = '';
//   console.log('target.style: ', target);
// };