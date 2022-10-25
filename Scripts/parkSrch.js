"use strict";

window.onload = () => {
  loadStatesList();
};

const statesList = document.getElementById("states-List");
const parkList = document.getElementById("park-Type-List");
const parkTbl = document.getElementById("parkTbl");
const statesListSection = document.getElementById("state-List-Section");
const parkTypeSection = document.getElementsByClassName("park-type-section");

function loadStatesList() {
  locationsArray.forEach((location) => {
    let option = new Option(location);
    statesList.appendChild(option);
  });
}

function loadParkTypeList() {
  parkTypesArray.forEach(parkType => {
    let option = new Option(parkType);
    parkList.appendChild(option);
  });
}

function selectParkType() {
  selectPark();
}

function selectPark() {
  parkTypeSection.style.display = "inline-block";
  const parkTblBody = document.getElementById("parkTblBody");
  parkTblBody.innerHTML = "";
  const selectedParkType = parkList.value;
  for (const nationalPark of nationalParksArray) {
    if (nationalPark.LocationName.includes(selectedParkType)) {
      loadParkTable(nationalPark);
    }
  }
}

function selectLocation() {
  selectState(); 
}

function selectState() {
  statesListSection.style.display = "inline-block";
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
  parkTbl.style.display = "inline-block";

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

  nationalParksArray.forEach(nationalPark => {
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
