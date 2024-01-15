# Projects Related to DOM

# project links
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-6atdhs?file=1-colorChanger%2Fchaiaurcode.js%3AL6,1-colorChanger%2Findex.html)

# solution code

# project 1
 
```JavaScript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function (items){
  items.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target)
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id;
    }
  
    
  })
  })

```


# project 2 bmi
```javascript solution code

const form = document.querySelector('form')

form.addEventListener('submit', function (e){
 e.preventDefault();

  const height = parseInt(document.querySelector('height').value);
  const weight = parseInt(document.querySelector('weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height<0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`
  }
  else if (weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
  }
})
``` 


# project 3 Digital clock
``` javascript solution code

const clock = document.getElementById('clock')



setInterval(function(){
  let date = new Date();
//console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

# project 4 Random number game

``` javaScript solution code
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
      displayGuess(guess)
      displayMessage(`Game Over and random number was ${randomnum}`)
      endGame()
    }else{
      displayGuess(guess)
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

function displayGuess(guess){
userInput.value = ''
guessSlot.innerHTML += `${guess},   `
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


```

# project : number background color(events waala 38th vedio)

``` javascript solution code

const randomcolor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (let i =0; i<6; i++){
   color += hex [Math.floor(Math.random() * 16)]
  }
  return color
}
let intervalId;
const startChangingColor = function(){
  if(!intervalId){
    intervalId = setInterval(changeBgcolor, 1000)
  }

  function changeBgcolor(){
    document.body.style.backgroundColor = randomcolor()
  }
}
const stopChangingColor = function(){
clearInterval(intervalId)
intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)

```

# keycode generator 

```javascript solution code

document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class ='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ?'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>    
</table>
  </div>
  `;
})      

```