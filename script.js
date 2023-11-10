// convert celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
  let fahrenheit
  fahrenheit = (celsius * 9/5) + 32
  return fahrenheit
}

// display fahrenheit to the page
function displayFahrenheit(fahrenheit) {
  const farSpan = document.querySelector("#far")
  farSpan.textContent = fahrenheit
}


// helper function for form handling
function handleFormSubmit(event) {
  event.preventDefault()

  let celsius = event.target.celsius.value

  if(celsius) {
    let fahrenheit = celsiusToFahrenheit(celsius)
    displayFahrenheit(fahrenheit)
  }
  
}


const form = document.querySelector("#form")

form.addEventListener("submit", handleFormSubmit)



