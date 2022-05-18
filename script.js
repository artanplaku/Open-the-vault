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


//-------------START BUTTON----------------------------------------------//

startButton.addEventListener("click", ()=>{
    inputVal = inputButton.value
    let chars = inputVal.split("")
    for(let i=0; i<chars.length;i++){
        const hiddenLetter = document.createElement("span")
        hiddenLetter.classList.add("input-letters")
        hiddenLetter.id = i
        hiddenLetter.innerText = "_"
        hiddenLetter.style.marginRight = "15px"
        // const hiddenChar = document.createElement("p")
        // hiddenLetter.appendChild(hiddenChar)
        // console.log(hiddenLetter)
        // hiddenLetter.innerText = "_ "
        letters.appendChild(hiddenLetter)
        // hiddenLetter.style.height = "5px";

        hiddenLetter.style.fontSize = "50px";
       
    }
    const startingMinutes = 2;
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

                }
                

            }
            
        })
    }else{
        wrongCounter.push(guessedLetter)
        wrongLetters.innerText = wrongCounter
        loseCount+=1
        console.log(loseCount)
        e.target.remove()
        if(loseCount>=5){
            alert("Game Over!")
        }
        

    }
    // for(let i = 0; i < chars.length; i++){
    //         const hiddenChar = document.createElement("span")
    //         console.log(hiddenChar)
    //         hiddenChar.innerText = chars[i] + " "
    //         letters.appendChild(hiddenChar)
    //         hiddenChar.style.fontSize = "50px"
    //         hiddenChar.style.visibility = "hidden"
    //         // "visible"
    //         // "hidden"
    //         if (chars[i]==("")){
    //             hiddenChar.style.visibility = "visible"
    //         }
    // }
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
