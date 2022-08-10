if (window.location.hash === "#light") {
  console.log("HAS LIGHT");
  setLight();
} else {
  console.log("HAS NO LIGHT");
  setDark();
}
console.log();
const transitionLeft = document.querySelectorAll(".comesFromLeft");
const transitionRight = document.querySelectorAll(".comesFromRight");
const liens = document.querySelectorAll("a");

for (i = 0; i < liens.length; i++) {
  let lien = liens[i];

  if (!lien.classList.contains("noEffect")) {
    // on écoute le clic sur ces liens
    lien.addEventListener("click", function (event) {
      //on empêche le lien de nous diriger vers une autre page
      event.preventDefault();

      //on ajoute alors la classe "active" pour ajouter le fondu au noir
      for (i = 0; i < transitionLeft.length; i++) {
        transitionLeft[i].classList.add("leavesToLeft");
        transitionLeft[i].classList.remove("comesFromLeft");
      }
      for (i = 0; i < transitionRight.length; i++) {
        transitionRight[i].classList.add("leavesToRight");
        transitionRight[i].classList.remove("comesFromRight");
      }
      lienclic = event.target.href + window.location.hash;
      console.log(lienclic);
      //On attend un peu que l'animation et se joue et on dirige vers le lien
      setTimeout(function () {
        window.location.href = lienclic;
      }, 500);
    });
  } else {
    lien.addEventListener("click", function (event) {
      lienclic = event.target.href + window.location.hash;
      console.log("JUST HERE", lienclic);
    });
  }
}
window.addEventListener("pageshow", (event) => {
  cleanStuff();
});

function cleanStuff() {
  let transitionLeftBack = document.querySelectorAll(".leavesToLeft");
  let transitionRightBack = document.querySelectorAll(".leavesToRight");
  for (i = 0; i < transitionLeftBack.length; i++) {
    transitionLeftBack[i].classList.remove("leavesToLeft");
  }
  for (i = 0; i < transitionRightBack.length; i++) {
    transitionRightBack[i].classList.remove("leavesToRight");
  }
  console.log("cleaned !");
}

let isMenuShown = false;

function toggleMenu() {
  isMenuShown = !isMenuShown;
  const menus = document.querySelectorAll(".header");
  if (isMenuShown) {
    menus[0].classList.add("responsive");
  } else {
    menus[0].classList.remove("responsive");
  }
}

function toggleLight() {
  try {
    var element = document.body;
    element.classList.toggle("light");
    const moon = document.getElementById("moon");
    const sun = document.getElementById("sun");
    if (moon.style.display === "none") {
      moon.style.display = "block";
      sun.style.display = "none";
    } else {
      moon.style.display = "none";
      sun.style.display = "block";
    }
  } catch (e) {
    console.log(e);
  }
}

function setLight() {
  try {
    var element = document.body;
    element.classList.add("light");
    const moon = document.getElementById("moon");
    const sun = document.getElementById("sun");
    moon.style.display = "block";
    sun.style.display = "none";
  } catch (e) {
    console.log(e);
  }
}

function setDark() {
  try {
    var element = document.body;
    element.classList.remove("light");
    const moon = document.getElementById("moon");
    const sun = document.getElementById("sun");
    moon.style.display = "none";
    sun.style.display = "block";
  } catch (e) {
    console.log(e);
  }
}
