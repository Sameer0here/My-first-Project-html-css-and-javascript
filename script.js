let timer = 60;
let score = 0;
let randomNumber = 0;

function makeBobbles() {
  let bubbles = ""

  for (let i = 1; i <= 308; i++) {
    let random = Math.floor(Math.random() * 10)
    bubbles += ` <div class="bubble">${random}</div>`

  }
  let panelbottom = document.querySelector("#panelbottom")
  panelbottom.innerHTML = bubbles
}

function timeRunner() {
  let cont = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector('#timer').textContent = timer;
    } else {
      clearInterval(cont)
      document.querySelector('#panelbottom').textContent = `Game Over`
    }
  }, 1000)
}

function hitBar() {
  randomNumber = Math.floor(Math.random() * 10)
  document.querySelector("#hits").textContent = randomNumber;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreValue").textContent = score;
}

document.querySelector("#panelbottom").addEventListener('click', function (detales) {
  let bubbleValue = Number(detales.target.textContent)
  if (bubbleValue === randomNumber) {
    makeBobbles()
    hitBar()
    increaseScore()
   
  }
})

timeRunner()
makeBobbles()
hitBar()