"use strict";

window.onload = () => {
    loadStatesList();

    loadParkTable();
};

const statesList = document.getElementById("states-List");


function loadStatesList() {
    locationsArray.forEach((location) => {
        let option = new Option(location);
        statesList.appendChild(option);
    });
}

function loadParkTable() {
    const parkTblBody = document.getElementById("parkTblBody");
    for (const nationalPark of nationalParksArray) {
        buildParkRow(parkTblBody, nationalPark);
    }
}

function buildParkRow(tableBody, nationalPark) {
    let row = tableBody.insertRow(-1);

    let cell1 = row.insertCell(0);
    cell1.innerText = nationalPark.LocationName;

    let cell2 = row.insertCell(0);
    cell2.innerText = nationalPark.Address;

    let cell3 = row.insertCell(0);
    cell3.innerText = nationalPark.City;

    let cell4 = row.insertCell(0);
    cell4.innerText = nationalPark.State;

    let cell5 = row.insertCell(0);
    cell5.innerText = nationalPark.ZipCode;

    let cell6 = row.insertCell(0);
    cell6.innerText = nationalPark.Phone;

}
