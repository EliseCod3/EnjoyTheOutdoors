"use strict";

const searchField = document.getElementById("search-field");
const byLocationField = document.getElementById("byState");
const byTypeField = document.getElementById("byType");
const byAllField = document.getElementById("byAll");
const changeableLabel = document.getElementById("changeable-label");
const parkTblBody = document.getElementById("parkTblBody");
const viewAllBtn = document.getElementById("view-all-btn");
const searchSection = document.getElementById("search-section");

const parkTbl = document.getElementById("parkTbl");
const tblHead = document.getElementById("tblHead");

function loadAllParks() {
  nationalParksArray.forEach((nationalPark) => {
    buildParkRow(parkTblBody, nationalPark)
  });
}

function loadSearchType() {
  searchField.innerText = "";
  parkTblBody.innerHTML = "";
  parkTbl.style.display = "none";
  let option = new Option("Select...", " ");
  searchField.appendChild(option);

  if (byLocationField.checked) {
    searchSection.style.display = "block";
    tblHead.style.display = "none";
    changeableLabel.innerHTML = "States/Territories";
    locationsArray.forEach((location) => {
      let option = new Option(location, location);
      searchField.appendChild(option);
    });
  } else if (byTypeField.checked) {
    searchSection.style.display = "block";
    tblHead.style.display = "none";
    changeableLabel.innerHTML = "Park Type";
    parkTypesArray.forEach((parkType) => {
      let option = new Option(parkType, parkType);
      searchField.appendChild(option);
    });
  } else if (byAllField.checked) {
    searchSection.style.display = "none";
    // loadAllParks();
    loadParkTable();
  }
}

function loadParkTable() {
  parkTbl.style.display = "inline-block";
  parkTblBody.innerHTML = "";

  const selectedValue = searchField.value;

  if (byLocationField.checked) {
    nationalParksArray.forEach((nationalPark) => {
      if (selectedValue === nationalPark.State) {
        tblHead.style.display = "block";
        buildParkRow(
          parkTblBody,
          nationalPark
        );
      }
    });
  } else if (byTypeField.checked) {
    nationalParksArray.forEach((nationalPark) => {
      if (nationalPark.LocationName.includes(selectedValue)) {
        tblHead.style.display = "block";
        buildParkRow(
          parkTblBody,
          nationalPark
        );
      }
    });
  } else if (byAllField.checked) {
      nationalParksArray.forEach((nationalPark) => {
        tblHead.style.display = "block";
        buildParkRow(parkTblBody, nationalPark)
      });
  }
}



function buildParkRow(tableBody, nationalPark) {
  let row = tableBody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = nationalPark.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = nationalPark.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = nationalPark.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = nationalPark.State;

  let cell5 = row.insertCell(4);
  cell5.innerText = nationalPark.ZipCode;

  let cell6 = row.insertCell(5);
  cell6.innerText = nationalPark.Phone;

  let cell7 = row.insertCell(6);
  if (nationalPark.Visit) {
      const web = document.createElement("a");
      let link = document.createTextNode(nationalPark.Visit);
      web.appendChild(link);
      web.innerText = "Visit";
      web.href = nationalPark.Visit;
      web.target = "_blank";
      cell7.appendChild(web);
  }

}

window.onload = () => {
  loadSearchType();
  byLocationField.onclick = loadSearchType;
  byAllField.onclick = loadSearchType;
  byTypeField.onclick = loadSearchType;
  searchField.onchange = loadParkTable;
};
