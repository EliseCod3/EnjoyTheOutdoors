"use strict";

const searchField = document.getElementById("search-field");
const byLocationField = document.getElementById("byState");
const byTypeField = document.getElementById("byType");
const changeableLabel = document.getElementById("changeable-label");
const parkTblBody = document.getElementById("parkTblBody");

const parkTbl = document.getElementById("parkTbl");
const statesListSection = document.getElementById("state-List-Section");
const parkTypeSection = document.getElementsByClassName("park-type-section");

function loadSearchType() {
  searchField.innerText = "";
  let option = new Option("Select...", " ");
  searchField.appendChild(option);

  if (byLocationField.checked) {
    changeableLabel.innerHTML = "States/Territories";
    locationsArray.forEach((location) => {
      let option = new Option(location, location);
      searchField.appendChild(option);
    });
  } else if (byTypeField.checked) {
    changeableLabel.innerHTML = "Park Type";
    parkTypesArray.forEach((parkType) => {
      let option = new Option(parkType, parkType);
      searchField.appendChild(option);
    });
  }
}

// function selectPark() {
//   parkTypeSection.style.display = "inline-block";
//   const parkTblBody = document.getElementById("parkTblBody");
//   parkTblBody.innerHTML = "";
//   const selectedParkType = searchField.value;
//   for (const nationalPark of nationalParksArray) {
//   }
// }

// function selectState() {
//   statesListSection.style.display = "inline";
//   const parkTblBody = document.getElementById("parkTblBody");
//   parkTblBody.innerHTML = "";
//   const selectedState = statesList.value;
//   for (const nationalPark of nationalParksArray) {
//     if (nationalPark.State == selectedState) {
//       loadParkTable(nationalPark);
//     }
//   }
// }

function loadParkTable() {
  parkTbl.style.display = "inline-block";
  parkTblBody.innerHTML = "";

  const selectedValue = searchField.value;

  if (byLocationField.checked) {
    nationalParksArray.forEach((nationalPark) => {
      if (selectedValue === nationalPark.State) {
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
    });
  } else if (byTypeField.checked) {
    nationalParksArray.forEach((nationalPark) => {
      if (nationalPark.LocationName.includes(selectedValue)) {
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
    });
  }
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

  nationalParksArray.forEach((nationalPark) => {
    if (nationalPark.Visit) {
      const web = document.createElement("a");
      let link = document.createTextNode(nationalPark.Visit);
      web.appendChild(link);
      web.innerText = "Visit";
      web.href = nationalPark.Visit;
      web.target = "_blank";
      cell7.appendChild(web);
    }
  });

  // nationalParksArray.forEach(park => {
  //   if (park.Visit == true) {
  //     cell7.innerText = park.Visit;
  //   }
  // });
}

window.onload = () => {
  onclick = loadSearchType;
  searchField.onchange = loadParkTable;
};
