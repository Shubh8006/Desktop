let randomnum = (parseInt(Math.random()* 100 + 1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevguess = []
let numguess = 1

let playGame = true

if(playGame){
submit.addEventListener('click', function(e){
  e.preventDefault();
 const guess = parseInt(userInput.value)
 console.log(guess)
 validateGuess(guess)
})
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }else if(guess < 1){
    alert('please enter a number greater than 1')
  }else if(guess >100){
    alert('please enter a number lessser than 100')
  }else {
    prevguess.push(guess)
    if(numguess === 11){
      ClearUpGuess(guess)
      displayMessage(`Game Over and random number was ${randomnum}`)
      endGame()
    } else{
    ClearUpGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
if(guess === randomnum){
displayMessage('you wins the game')
endGame()
}else if (guess < randomnum){
  displayMessage('Number is very low')
}else if (guess> randomnum){
  displayMessage('Number is very high')
}
}

function ClearUpGuess(guess){
userInput.value = ''
guessSlot.innerHTML += `${guess} `
numguess++;
remaining.innerHTML = `${11 - numguess}`
}

function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
userInput.value = ''
userInput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML= '<h2 id="newGame">Start New Game</h2> ';
startOver.appendChild(p)
playGame = false
newGame();
}
  


function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
   randomnum = (parseInt(Math.random()* 100 + 1));
   prevguess = []
   numguess = 1
   guessSlot.innerHTML = ''
   remaining.innerHTML = `${11 - numguess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
   playGame = true;
})
}
// let randomnum = (parseInt(Math.random() * 100 +1))

// const userInput = document.querySelector('.guessField')
// const submit = document.querySelector('.guessSubmit')
// const guessSlot = document.querySelector('.guesses')
// const remaining = document.querySelector('.lastResult')
// const lowOrHi = document.querySelector('lowOrHi')
// const startOver= document.querySelector('.resultParas')

// const p = document.createElement('p')

// let prevGuess = []
// let numGuess = 1
// let playgame = true

// if(playgame){
//   submit.addEventListener('click', function(e){
//     e.preventDefault()
//     const guess = parseInt(userInput.value)
//      validateGuess(guess)
//   })
// }

// function validateGuess(guess){
// if(isNaN(guess)){
//  alert('Please enter a valid number')
// }else if(guess > 100){
//   alert('please enter a smaller number')
// }
// else if(guess < 1){
//   alert('please enter a greater number')
// }else{
//   prevGuess.push(guess)
//   if(numGuess === 11){
//     clearUpGuess(guess)
//     displayMessage(`Game over and random number was ${randomnum}`)
//     endGame()
//   }else{
//     clearUpGuess(guess)
//     checkguess(guess)
//   }
// }

// }

// function checkguess(guess){
// if(guess === randomnum){
//   displayMessage(`You won the game and random number is ${randomnum}`)
//   endGame()
// }else if(guess > randomnum){
//   displayMessage(`your guess is too high`)
// }else if(guess < randomnum){
//   displayMessage(`your guess is too low`)
// }
// }

// function clearUpGuess(guess){
// userInput.value = ''
// guessSlot.innerHTML += ` ${guess}` 
// numGuess++;
// remaining.innerHTML = `${11 - numGuess}`

// }

// function displayMessage(message){
// lowOrHi.innerHTML = `<h2>${message}</h2>`
// }

// function endGame(){
//   userInput.value = ''
//   userInput.setAttribute('disabled', '')
//   p.classList.add('button')
//   p.innerHTML = `<h2 id='newGame'> Start the game again</h2>`
//   startOver.appendChild(p)
//   playgame= false
// newGame()
// }

// function newGame(){
//   const newGameButton = document.querySelector('#newGame')
//   newGameButton.addEventListener('click', function(e){
//     randomnum = (parseInt(Math.random() * 100 +1))
//     prevGuess  = []
//     numGuess = 1       
//     guessSlot.innerHTML = ''  
//     remaining.innerHTML =`${11 - numGuess}`
//     userInput.removeAttribute('disabled')
//     startOver.removeChild(p)
//     playgame = true;
//   })

// }