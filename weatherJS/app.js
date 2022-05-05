//create a new instance of weather class
const weather = new Weather("london", "uk");

//initialize ui
const ui = new UI();

//change location   //todo list of cities and state codes and link to README
// weather.changeLocation("nigeria", "lag")

//call get weather when dom is loaded
document.addEventListener("DOMContentLoaded", getWeather());

//get weather from the current state and country
function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      // console.log(results);
      ui.paint(results);
    })
    .catch((err) => {
      console.log(err, "error found");
    });
}

//!incomplete
