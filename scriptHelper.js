
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
   let div = document.querySelector("MissionTarget");
    div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `
};

function validateInput(testInput) {

    if (testInput.length == 0){
        return "Empty"
    }

    else if (isNaN()) {
        return "Not a Number"
    } 
    
    else {
        return "Is a Number"
    
    }

} 

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotname = document.queryselector(input[name=pilotName]);
    let copilotName = document.querySelector(input[name=copilotName]);
    let fuelLevel = document.querySelector(input[name=fuelLevel]);
    let cargoLevel = document.querySelector(input[name=cargoLevel]);
    let faultyItems = document.querySelector("faultyItems");

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    pilotStatus.innerHTML = 'Pilot ${pilotName} is ready for launch.';
    copilotStatus.innerHTML = 'Co-Pilot ${copilotName} is ready for launch.';

    if (pilotStatus.value === "" || coPilotStatus.value === "" || fuelStatus.value === "" || cargoStatus.value === "") {
        alert("All fields are required!");
    }

    else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number')
        alert('Numbers are not permitted. Please enter a name.')
    
    else if (validateInput(fuelLevel) === !isNaN || validateInput(cargoLevel) === !isNaN)
        alert('Please enter a numerical value.')
    
    else if (fuelLevel < 10000){
        fuelStatus.innerHTML = "Not Enough Fuel for Journey";
        let launchStatus = "Shuttle not ready for launch"
        launchStatus.innerHTML.style.color.red(h2)
    }

    else if (cargoLevel > 10000){
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
        let launchStatus = "Shuttle not ready for launch";
        launchStatus.innerHTML.style.color.red(h2);
    }

    else {
        launchStatus.innerHTML = "Shuttle Ready for Launch";
        launchStatus.innerHTML.style.color.green(h2);
    }
}

async function myFetch() {
    let planetsReturned = ("https://handlers.education.launchcode.org/static/planets.json");

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomNum = Math.floor(Math.random() * planets.length) + 1;
    return planets[RandomNum];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch
