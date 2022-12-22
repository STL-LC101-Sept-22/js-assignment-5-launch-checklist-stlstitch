require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTargetElement = document.getElementById('missionTarget');
    missionTargetElement.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    }

    let number = Number(testInput);
    if (isNaN(number)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotValidationResult = validateInput(pilot);
    let copilotValidationResult = validateInput(copilot);
    let fuelLevelValidationResult = validateInput(fuelLevel);
    let cargoLevelValidationResult = validateInput(cargoLevel);

    if (pilotValidationResult === 'Empty' || copilotValidationResult === 'Empty' ||
        fuelLevelValidationResult === 'Empty' || cargoLevelValidationResult === 'Empty') {
        alert('All fields are required!');
        return;
    }

    if (pilotValidationResult === 'Is a Number' || copilotValidationResult === 'Is a Number' ||
        fuelLevelValidationResult === 'Not a Number' || cargoLevelValidationResult === 'Not a Number') {
        alert('Make sure to enter valid information for each field!');
        return;
    }

    list.style.visibility = 'visible';

    let pilotStatusElement = document.getElementById('pilotStatus');
    let copilotStatusElement = document.getElementById('copilotStatus');
    let fuelStatusElement = document.getElementById('fuelStatus');
    let cargoStatusElement = document.getElementById('cargoStatus');
    let launchStatusElement = document.getElementById('launchStatus');

    pilotStatusElement.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatusElement.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let isReady = true;

    if (fuelLevel < 10000) {
        fuelStatusElement.innerHTML = 'Fuel level too low for launch';
        isReady = false;
    } else {
        fuelStatusElement.innerHTML = 'Fuel level high enough for launch';
    }

    if (cargoLevel > 10000) {
        cargoStatusElement.innerHTML = 'Cargo mass too heavy for launch';
        isReady = false;
    } else {
        cargoStatusElement.innerHTML = 'Cargo mass low enough for launch';
    }

    if (isReady) {
        launchStatusElement.innerHTML = 'Shuttle is Ready for Launch';
        launchStatusElement.style.color = 'rgb(65, 159, 106)';
    } else {
        launchStatusElement.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatusElement.style.color = 'rgb(199, 37, 78)';
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;