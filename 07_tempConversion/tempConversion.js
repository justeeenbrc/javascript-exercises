const convertToCelsius = function(temp1) {
  let tempInCelsius;
  tempInCelsius = (temp1 - 32)* (5/9);
  return Math.round(tempInCelsius*10)/10;
};

const convertToFahrenheit = function(temp2) {

  let tempInFahrenheit;
  tempInFahrenheit = (temp2 * (9/5)) + 32;
  return Math.round(tempInFahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
