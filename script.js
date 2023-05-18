const button = document.querySelector("button");
const output = document.querySelector("h1");

//console.log(button);

button.addEventListener("click", function() {
  const cost = document.querySelector("input");

  console.log(cost.valueAsNumber)
  //console.log(cost.value *0.15);

  let isNumber = (Number(cost.valueAsNumber) ? true : false)
  console.log(isNumber)

  let tip = (cost.value * 0.15).toFixed(2)

  isNumber ? output.innerHTML = `You should tip <span class="sign">$</span><span>${tip}</span> on <span class="sign">$</span><span>${cost.value}</span>` : output.innerText = `You should enter an amount`


})