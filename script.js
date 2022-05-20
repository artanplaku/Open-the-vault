const inputButton = document.querySelector("#wordInput")
const startButton = document.querySelector(".startButton")
const guessHere = document.querySelector(".guess")
const guessHereText = document.querySelector(".guessHere")
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
const resetButton = document.querySelector(".resetButton")
const vault = document.querySelector(".rotate")

let audio = new Audio("./audio/song.mp3");

//-------------START BUTTON----------------------------------------------//

startButton.addEventListener("click", ()=>{
    inputButton.style.display = "none"
    startButton.style.display = "none"
    resetButton.style.display = "inline-block"

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
        letters.appendChild(hiddenLetter)
        hiddenLetter.style.fontSize = "50px";
       
    }
    const startingMinutes = 1;
let time = startingMinutes * 60;
const countdownEl = document.querySelector("#countdown")
let refreshIntervalid=setInterval(updateCountdown, 1000);
// let once = false;
 function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    if (time < 0) { //stop the setInterval whe time = 0 for avoid negative time
        guessHereText.innerText = "The alarm went off. Game over"
        guessHereText.style.fontSize = "50px"
        clearInterval(refreshIntervalid);
    }else if (winCount===chars.length){
        clearInterval(refreshIntervalid);
    }
    once = true;


}
})
//-----------------------------------------------------------------------------------//

const hiddenChar = document.createElement("span")
const revealLetter = (e) =>{
    
    let chars = inputVal.split("")
    let guessedLetter = e.target.id.toLowerCase()
    console.log(guessedLetter);
    let index = chars.indexOf(guessedLetter)
    if (chars.includes(guessedLetter)){
       
        let underlines = document.querySelectorAll(".input-letters")
        underlines.forEach(span =>{
           
            if(chars[parseInt(span.id)] === guessedLetter){
                console.log("Match!");
                span.innerText = guessedLetter
                winCount++
                console.log(winCount)
                e.target.remove()
                if(winCount===chars.length){
                 
                    audio.pause();
                    vault.style.display = "none"
                    guessHereText.innerText = "Congratulations! You opened the Vault!"
                    guessHereText.style.fontSize = "50px"

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
            countDown.style.display = "none"
            audio.pause();
            guessHereText.innerText = "The alarm went off. Game Over!"
            guessHereText.style.fontSize = "50px"
        }
        

    }
   
}

alphabet.forEach(letter=>{
    letter.addEventListener("click", revealLetter)
})


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