"use strict";

window.onload = () => {
  loadStatesList();
};

const statesList = document.getElementById("states-List");

function loadStatesList() {
  locationsArray.forEach((location) => {
    let option = new Option(location);
    statesList.appendChild(option);
  });
}

function selectState() {
  const parkTblBody = document.getElementById("parkTblBody");
  parkTblBody.innerHTML = "";
  const selectedState = statesList.value;
  for (const nationalPark of nationalParksArray) {
    if (nationalPark.State == selectedState) {
      loadParkTable(nationalPark);
    }
  }
}

function loadParkTable(nationalPark) {
  const parkTblBody = document.getElementById("parkTblBody");

  buildParkRow(
    parkTblBody,
    nationalPark.LocationName,
    nationalPark.Address,
    nationalPark.City,
    nationalPark.State,
    nationalPark.ZipCode,
    nationalPark.Phone
  );
}

function buildParkRow(tableBody, name, address, city, state, zipCode, phone) {
  let row = tableBody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = name;

  let cell2 = row.insertCell(1);
  cell2.innerText = address;

  let cell3 = row.insertCell(2);
  cell3.innerText = city;

  let cell4 = row.insertCell(3);
  cell4.innerText = state;

  let cell5 = row.insertCell(4);
  cell5.innerText = zipCode;

  let cell6 = row.insertCell(5);
  cell6.innerText = phone;

  let cell7 = row.insertCell(6);

  nationalParksArray.forEach(park => {
    if (park.Visit == true) {
      cell7.innerText = park.Visit;
    }
  });
}
