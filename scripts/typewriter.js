var i = 0;
var txt = document.getElementById("typewriter").innerHTML;
var speed = 90;
document.getElementById("typewriter").innerHTML = "";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter() {
  for(i; i < txt.length; i++) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    await sleep(speed);
  }
  document.getElementById("typewriter").innerHTML += '<span class="blink">|</span>'
}

typeWriter()