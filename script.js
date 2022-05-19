const inputButton = document.querySelector("#wordInput")
const startButton = document.querySelector(".startButton")
const guessHere = document.querySelector(".guess")
const letters = document.querySelector(".letters")
let empty = ""
const letterA = document.querySelector("#A")
const alphabet = document.querySelectorAll(".letter")
let inputVal = ''
console.log(inputVal)
const wrongLetters = document.querySelector(".wrongLetters")
let wrongCounter = [];
let winCount = 0;
console.log(`win count is ${winCount}` )
let loseCount = 0;
console.log(`lose count is ${loseCount}`)
const countDown = document.querySelector("#countdown")

let audio = new Audio("./audio/song.mp3");

//-------------START BUTTON----------------------------------------------//

startButton.addEventListener("click", ()=>{
    inputButton.style.display = "none"
    startButton.style.display = "none"
    inputVal = inputButton.value;
    let chars = inputVal.split("");
    audio.play();
    for(let i=0; i<chars.length;i++){
        const hiddenLetter = document.createElement("span")
        hiddenLetter.classList.add("input-letters")
        hiddenLetter.id = i
        hiddenLetter.innerText = "_"
        hiddenLetter.style.marginRight = "15px"
        hiddenLetter.style.color = "white"
        // const hiddenChar = document.createElement("p")
        // hiddenLetter.appendChild(hiddenChar)
        // console.log(hiddenLetter)
        // hiddenLetter.innerText = "_ "
        letters.appendChild(hiddenLetter)
        // hiddenLetter.style.height = "5px";

        hiddenLetter.style.fontSize = "50px";
       
    }
    const startingMinutes = 1;
let time = startingMinutes * 60;
const countdownEl = document.querySelector("#countdown")
let refreshIntervalid=setInterval(updateCountdown, 1000);
let once = false;
 function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    if (time < 0) { //stop the setInterval whe time = 0 for avoid negative time
        alert("Game Over")
        clearInterval(refreshIntervalid);
    }else if (winCount===chars.length){
        clearInterval(refreshIntervalid);
    }
    once = true;


}
})
const hiddenChar = document.createElement("span")
const revealLetter = (e) =>{
    // inputVal = inputButton.value
    // console.log(inputVal);
    let chars = inputVal.split("")
    // console.log(chars)
    let guessedLetter = e.target.id.toLowerCase()
    console.log(guessedLetter);
    let index = chars.indexOf(guessedLetter)
    if (chars.includes(guessedLetter)){
        // console.log("Letter exists", guessedLetter);
        // console.log(chars.indexOf(guessedLetter));
        let underlines = document.querySelectorAll(".input-letters")
        underlines.forEach(span =>{
            // console.log("span id: ", typeof span.id);
            // console.log("index: ", typeof index);
            if(chars[parseInt(span.id)] === guessedLetter){
                console.log("Match!");
                span.innerText = guessedLetter
                winCount++
                console.log(winCount)
                e.target.remove()
                if(winCount===chars.length){
                    alert("You won the Game!")
                    audio.pause();

                }
                

            }
            
        })
    }else{
        wrongCounter.push(" " + guessedLetter)
        wrongLetters.innerText = wrongCounter 
        wrongLetters.style.color = "red"
        loseCount+=1
        console.log(loseCount)
        e.target.remove()
        if(loseCount>=5){
            alert("Game Over!");
            countDown.style.display = "none"
            audio.pause();
        }
        

    }
   
}

alphabet.forEach(letter=>{
    letter.addEventListener("click", revealLetter)
})

//-------------------------------TIMER------------------------------------//

// const startingMinutes = 1;
// let time = startingMinutes * 60;
// const countdownEl = document.querySelector("#countdown")
// let refreshIntervalid=setInterval(updateCountdown, 1000);
// let once = false;
//  function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60;
//     seconds = seconds < 10? "0" + seconds : seconds;
//     countdownEl.innerHTML = `${minutes}: ${seconds}`;
//     time--;
//     if (time < 0) { //stop the setInterval whe time = 0 for avoid negative time
//         alert("Game Over")
//         clearInterval(refreshIntervalid);
//     }
//     once = true;


// }
//-------------------------------------MODAL----------------------------------------//
//Grabbing Elements
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal')
const close = document.getElementById('close')

//Functions
const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none'
}

//Event Listeners
openBtn.addEventListener('click', openModal)

close.addEventListener('click', closeModal)
setTimeout(openModal, 1000);


//----------------------------Rotate Image Animation-------------------------------//