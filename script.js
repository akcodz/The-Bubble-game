let time = 2
let score = 0
let rnum = 0
function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score
}

function heatValue() {
    rnum = Math.floor(Math.random() * 20)
    document.querySelector("#hit").textContent = rnum
}
function makeBubble() {
    let clutter = " ";
    for (let i = 1; i <= 184; i++) {
        let num = Math.floor(Math.random() * 20)
        clutter += `<div class="bble">${num}</div>`
    }
    document.querySelector(".pbtm").innerHTML = clutter
}
function runTime() {
    let timer = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector("#timer").textContent = time
        }
        else {
            clearInterval(timer)
            document.querySelector(".pbtm").innerHTML = `<h1 id="postext2">GAME OVER !!!</h1> <br>
            <h2 id="postext2"> Your Score is ${score}</h2>`
        }
    }, 1000)
}
document.querySelector(".pbtm").addEventListener("click", function (detail) {
    let clickedNum = (Number(detail.target.textContent));
    if (clickedNum === rnum) {
        increaseScore()
        makeBubble()
        heatValue()
    }
    else {
        makeBubble()
        heatValue()
    }
})
makeBubble()
runTime()
heatValue()