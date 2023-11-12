/**
 * convert celsius to fahrenheit
 * @param {number} celsius 
 * @returns {number} fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  let fahrenheit
  fahrenheit = (celsius * 9/5) + 32
  return fahrenheit
}

/**
 * display fahrenheit to the page
 * @param {number} fahrenheit 
 */
function displayFahrenheit(fahrenheit) {
  const farSpan = document.querySelector("#far")
  farSpan.textContent = fahrenheit
}


/**
 * helper function for form handling
 * @param {Event} event 
 */
function handleFormSubmit(event) {
  event.preventDefault()

  let celsius = event.target.celsius.value

  if(celsius) {
    let fahrenheit = celsiusToFahrenheit(celsius)
    displayFahrenheit(fahrenheit)
  }
  
}

/**
 * @type {Element}
 */
const form = document.querySelector("#form")

form.addEventListener("submit", handleFormSubmit)



