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
let wrongCounter = []
let 

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
})
const hiddenChar = document.createElement("span")
const revealLetter = (e) =>{
    // inputVal = inputButton.value
    console.log(inputVal);
    let chars = inputVal.split("")
    console.log(chars)
    let guessedLetter = e.target.id.toLowerCase()
    console.log(guessedLetter);
    let index = chars.indexOf(guessedLetter)
    if (chars.includes(guessedLetter)){
        console.log("Letter exists", guessedLetter);
        console.log(chars.indexOf(guessedLetter));
        let underlines = document.querySelectorAll(".input-letters")
        underlines.forEach(span =>{
            console.log("span id: ", typeof span.id);
            console.log("index: ", typeof index);
            if(parseInt(span.id) === index){
                console.log("Match!");
                span.innerText = guessedLetter
            }
        })
    }else{
        wrongCounter.push(guessedLetter)
        wrongLetters.innerText = wrongCounter

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

