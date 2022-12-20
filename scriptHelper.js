
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

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

    let form = document.querySelector("Pilot Name")
    if (pilotStatus.value === "" || coPilotStatus.value === "" || fuelStatus.value === "" || cargoStatus.value === "") {
        alert("All fields are required!");
        event.preventDefault();
    }
    
    if (fuelLevel < 10000){
        console.log ("Not Enough Fuel for Journey");
        let launchStatus = "Shuttle not ready for launch"
        launchStatus.innerHTML.style.color.red(h2)
    }

    else if (cargoLevel > 10000){
        console.log ("There is too much mass for the shuttle to take off");
        let launchStatus = "Shuttle not ready for launch";
        launchStatus.innerHTML.style.color.red(h2);
    }

    else {
        console.log ("Shuttle Ready for Launch");
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
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
