"use strict";

const statesList = document.getElementById("states-List");


function loadStatesList() {
    locationsArray.forEach((location) => {
        let option = new Option(location);
        statesList.appendChild(option);
    });
}

function displayParkInformation() {
    
}

window.onload = () => {
    loadStatesList();
}