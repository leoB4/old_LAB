// ***********************************************
// Test particule
// ***********************************************

// Initilisation des variables
// ***********************************************
let roundSelector = document.querySelector('.round');

var constellationAudio = document.querySelector("audio");
constellationAudio.volume = 0.12;

roundSelector.addEventListener('click', particule);

let audioOn = false;
roundSelector.addEventListener('click', soundAnimation);


// Affichage des particules
// ***********************************************
function particule() {
  if (roundSelector.childElementCount !== 8) {
    for (i = 0; i < 8; i++) {
      roundSelector.innerHTML += "<div class=\"particlesJS\" id=\"particles-js" + i + "\"></div>"
      particlesJS.load(`particles-js${i}`, './js/particles.json', function () {
        console.log('callback - particles.js config loaded');
      });
    }
  }
  const particleCase = document.querySelectorAll('.particlesJS');
  particleCase.forEach((i, index) => {
    i.classList.add(`popOn${index}`);
  });

  setTimeout(moveBackwardFrag1, 6000);//durée 4
  setTimeout(moveForwardFrag1, 9500);//durée 4
  setTimeout(moveForwardFrag2,17000);//durée 4,5
  setTimeout(moveForwardFrag3,23500);//durée 7,5
  setTimeout(moveForwardFrag4,33000);//durée 7,5
  setTimeout(moveForwardFrag3,42500);//durée 7,5
}

function moveBackwardFrag1() {
  const particleCase = document.querySelectorAll('.particlesJS');
  particleCase.forEach((i, index) => {
    i.classList.remove(`popOn${index}`);
    i.classList.add(`popOff${index}`);
  });
}

function moveForwardFrag1() {
  const particleCase = document.querySelectorAll('.particlesJS');
  particleCase.forEach((i, index) => {
    i.classList.remove(`popOff${index}`);
    i.classList.add(`getOn${index}`);
  });
  setTimeout(
    function () {
      const particleCase = document.querySelectorAll('.particlesJS');
        particleCase.forEach((i, index) => {
          i.classList.remove(`getOn${index}`);
          i.classList.add(`popOff${index}`);
      });
    }, 4000);
}
function moveForwardFrag2() {
  const particleCase = document.querySelectorAll('.particlesJS');
  particleCase.forEach((i, index) => {
    i.classList.remove(`popOff${index}`);
    i.classList.add(`getOnRotate${index}`);
  });
  setTimeout(
    function () {
      const particleCase = document.querySelectorAll('.particlesJS');
        particleCase.forEach((i, index) => {
          i.classList.remove(`getOnRotate${index}`);
          i.classList.add(`popOff${index}`);
      });
    }, 4500);
}
function moveForwardFrag3() {
  const particleCase = document.querySelectorAll('.particlesJS');
  particleCase.forEach((i, index) => {
    i.classList.remove(`popOff${index}`);
    i.classList.add(`getOnMove${index}`);
  });
  setTimeout(
    function () {
      const particleCase = document.querySelectorAll('.particlesJS');
        particleCase.forEach((i, index) => {
          i.classList.remove(`getOnMove${index}`);
          i.classList.add(`popOff${index}`);
      });
    }, 7500);
}
function moveForwardFrag4() {
  const particleCase = document.querySelectorAll('.particlesJS');
  particleCase.forEach((i, index) => {
    i.classList.remove(`popOff${index}`);
    i.classList.add(`getOnTrembling${index}`);
  });
  setTimeout(
    function () {
      const particleCase = document.querySelectorAll('.particlesJS');
        particleCase.forEach((i, index) => {
          i.classList.remove(`getOnTrembling${index}`);
          i.classList.add(`popOff${index}`);
      });
    }, 7500);
}
// Gestion du son
// ***********************************************
function soundAnimation() {
  if (audioOn) {
    constellationAudio.pause();
  } else {
    constellationAudio.play();
  }
}

constellationAudio.onplaying = function () {
  audioOn = true;
};
constellationAudio.onpause = function () {
  audioOn = false;
};
