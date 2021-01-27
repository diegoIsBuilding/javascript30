document.addEventListener("DOMContentLoaded", () => {
  const secondHand = document.querySelector(".sec-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  function setDate() {
    const now = new Date();
    const currentSecond = now.getSeconds();
    const currentMinute = now.getMinutes();
    const currentHour = now.getHours();
    const secondConvertedToDegrees = (currentSecond / 60) * 360 + 90;
    const minuteConvertedToDegrees = (currentMinute / 60) * 360 + 90;
    const hourConvertedToDegrees = (currentHour / 12) * 360 + 90;

    // Fix transform bug
    // ISSUE: Once the second hand hits 0 seconds it reset backwards
    // instead of transforming forward onto the next interval
    // -- this does not work
    // if (currentSecond === 0 && secondConvertedToDegrees === 90) {
    //     //secondHand.style.transform.rotate(90);
    // }

    secondHand.style.transform = `rotate(${secondConvertedToDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteConvertedToDegrees}deg)`;
    hourHand.style.Transform = `rotate(${hourConvertedToDegrees}deg)`;
  }
  setInterval(setDate, 1000);

});
