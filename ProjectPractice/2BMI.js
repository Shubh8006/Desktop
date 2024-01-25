const form = document.querySelector('form')
//console.log(form);
//declaring varaible outside will provide you empty values
//const height =  parseInt(document.querySelector('height').value)
form.addEventListener('submit', function(e){
    e.preventDefault()

  const height =  parseInt(document.querySelector('#height').value)
  const weight =  parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  const suggest = document.querySelector('#suggest')
  
  if (height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === "" || weight<0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`;
  }
  else  {
const bmi = (weight / ((height*height)/10000).toFixed(2))
results.innerHTML = `<span>${bmi}</span>`
 if(bmi< 18.6){
  suggest.innerHTML = `You are UnderWeight`
}
else if(bmi <24.9){
  suggest.innerHTML = `You are in normal range`
}
else{
 suggest.innerHTML = `You are Overweight`
}
  }
 
  
})
