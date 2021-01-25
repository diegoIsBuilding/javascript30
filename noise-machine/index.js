document.addEventListener("DOMContentLoaded", function (e) {
  const keys = document.querySelectorAll(".key");
  console.log(keys)
  // keys.forEach((key) => key.addEventListener("transitionend", removeTransform));
})
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}
window.addEventListener("keydown", playSound);

// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if (!audio) return;
//   audio.currentTime = 0;
//   audio.play();
//   key.classList.add("playing");
// }
// function removeTransform(e) {
//   console.log(e);
//   //propertyName - does not exist
//   if (e.propertyName !== "transform") return;
//   console.log(this);
//   this.classList.remove("playing");
// }
// const keys = document.querySelectorAll(".key");
// // the removeTransform function is not being called once the sound is played
// keys.forEach((key) => key.addEventListener("transitionend", removeTransform));
// window.addEventListener("keydown", playSound);