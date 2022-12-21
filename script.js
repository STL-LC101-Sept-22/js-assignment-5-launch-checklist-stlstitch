
const { formSubmission, pickPlanet, addDestinationInfo, validateInput, MyFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

let listedPlanets;
    
let listedPlanetsResponse = myFetch("https://handlers.education.launchcode.org/static/planets.json").then(response);

    listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
}).then(function () {
    console.log(listedPlanets);
    let selectedPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(pickedPlanet);  
})

})