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
      }
      for (i = 0; i < transitionRight.length; i++) {
        transitionRight[i].classList.add("leavesToRight");
      }
      lienclic = event.target.href;

      //On attend un peu que l'animation et se joue et on dirige vers le lien
      setTimeout(function () {
        window.location.href = lienclic;
        setTimeout(function () {
          cleanStuff();
        }, 500);
      }, 500);
    });
  }
}

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

window.onbeforeunload = function HandleBackFunctionality() {
  cleanStuff();
};
