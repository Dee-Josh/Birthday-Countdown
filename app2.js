
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const sec = document.getElementById("seconds");

const dayP = document.querySelector("#day-p");
const hourP = document.querySelector("#hour-p");
const minuteP = document.querySelector("#minute-p");
const secondsP = document.querySelector("#seconds-p");

const playSongs = document.querySelectorAll(".birthday-img-btn");
const stopSong = document.querySelector(".stop-music");

const audio = new Audio;

const birthdaySongs = [
    "./sounds/1.mp3",
    "./sounds/2.mp3",
    "./sounds/3.mp3",
    "./sounds/4.mp3",
    "./sounds/5.mp3",
    "./sounds/6.mp3",
    "./sounds/7.mp3",
    "./sounds/8.mp3",
    "./sounds/9.mp3",
    "./sounds/10.mp3"
];



playSongs.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        const audioSource = Math.trunc(Math.random()*10);
        audio.src = birthdaySongs[audioSource];
        audio.play();
        console.log("Playing Song");
    })
})

stopSong.addEventListener('click', ()=>{
    audio.pause();
    audio.currentTime = 0;
})




// Set the date we're counting down toz
var countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    // day.innerHTML = days;
    if(String(days).length < 2) {
        day.innerHTML = `0${days}`;
    }else{
        day.innerHTML = days;
    }

    if (String(hours).length < 2) {
        hour.textContent = `0${hours}`
    }else{
        hour.textContent = hours
    }

    if (String(minutes).length < 2) {
        minute.textContent = `0${minutes}`
    }else{
        minute.textContent = minutes
    }

    if (String(seconds).length < 2) {
        sec.textContent = `0${seconds}`
    }else{
        sec.textContent = seconds
    }

    if(day.textContent <= 1){
        dayP.textContent = "DAY";
    }else{
        dayP.textContent = "DAYS";
    }
    if(hour.textContent <= 1){
        hourP.textContent = "HR";
    }else{
        hourP.textContent = "HRS";
    }
    if(minute.textContent <= 1){
        minuteP.textContent = "MIN";
    }else{
        minuteP.textContent = "MINS";
    }
    if(sec.textContent <= 1){
        secondsP.textContent = "SEC";
    }else{
        secondsP.textContent = "SECS";
    }



    

    

  // If the count down is finished, write some text
  if (distance < 1) {
    clearInterval(x);
    
  }
}, 1000);


// const display = document.querySelector(".display");
// const hidden = document.querySelectorAll(".hidden")


// display.addEventListener('click', (e)=>{
//     hidden.forEach((hid)=>{
//         hid.classList.toggle('hidden');
//     })
//     e.stopPropagation();
// })

// document.body.addEventListener('click', (e)=>{
//     hidden.forEach((hid)=>{
//         hid.classList.add('hidden');
//     })
//     e.stopPropagation();
// })

