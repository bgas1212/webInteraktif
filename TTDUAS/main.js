// mouse parallax
document.addEventListener("mousemove", parallax);
function parallax(e) {
  document
    .querySelectorAll(".obj, .goji, .redSun, .fuji")
    .forEach(function (move) {
      var moving_value = move.getAttribute("data-speed");
      var x = (e.clientX * moving_value) / 400;
      var y = (e.clientY * moving_value) / 400;

      move.style.transform =
        "translateX(" + x + "px ) translateY(" + y + "px ) ";
    });
}

// lagu
// const lagu = document.getElementById("lagu")
// lagu.play();

// function playMusic(){
//     var music = new Audio('gojiTheme.mp3');
//     music.play();
//     }

// let aud = document.getElementById("ASong").children[0];
// let isPlaying = false;
// aud.pause();

// function playPause() {
//   if (isPlaying) {
//     aud.pause();
//   } else {
//     aud.play();
//   }
//   isPlaying = !isPlaying;
// }

// document.getElementById("soundTag").innerHTML = "<audio controls volume preload='none' src='gojiTheme.mp3'></audio>";


