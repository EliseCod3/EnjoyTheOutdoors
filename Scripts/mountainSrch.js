"use strict";
// grab elements from html
const mountainDropdown = document.getElementById("mountian-dropdown-list");
const displaySection = document.getElementById("display-section");
const viewAllBtn = document.getElementById("view-all-btn");
const clearAllBtn = document.getElementById("clear-all-btn");

// Add the datalist of mountains to html dropdown
function loadMountainList() {
    mountainsArray.forEach(mountain => {
        let option = new Option(mountain.name, mountain.name);
        mountainDropdown.appendChild(option);
    });
}

// select the mountain in dropdown and call function to display card
function selectMountain() {
    displaySection.style.display = "block";
    const selectedMountain = mountainDropdown.value;
    for (const mountain of mountainsArray) {
        if (mountain.name == selectedMountain) {
            buildCard(mountain);
        }
    }
}

function loadAllMountains() {
    displaySection.style.display = "block";
    mountainsArray.forEach((mountain) => {
        buildCard(mountain);
    });
}

function clearAllMountains() {
    displaySection.style.display = "none";
}

// create the card to be displayed
function buildCard(mountain) {
    // create cardbody and put in display section
    let cardSection = document.createElement("div");
    cardSection.className = "card";
    cardSection.className = "cardColor";
    displaySection.appendChild(cardSection);

    // card image
    let cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.className = "imgBorder";
    cardImg.alt = mountain.name;
    cardImg.src = "images/" + mountain.img;

    // card head title
    let cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.innerText = mountain.name;
    
    //Add information 
    let cardDescription = document.createElement("p");
    cardDescription.className = "padding";
    cardDescription.innerText = mountain.desc;

    let elevation = document.createElement("p");
    elevation.className = "padding";
    elevation.innerText = `Elevation: ${mountain.elevation}ft`;

    let coords = document.createElement("p");
    coords.className = "padding";
    coords.innerText = `Coordinates: ${mountain.coords.lat}, ${mountain.coords.lng}`;

    let effort = document.createElement("p");
    effort.className = "padding";
    effort.innerText = mountain.effort;

    let removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-dark";
    removeBtn.className = "spacing";
    removeBtn.innerText = "Remove Mountain";

    // get the button to remove the card
    function RemoveAddedCard() {
        displaySection.removeChild(cardSection);
    };
    removeBtn.onclick = RemoveAddedCard;

    const divContainer = document.createElement("div");
    divContainer.className = "card-body";
    cardSection.appendChild(divContainer);
    divContainer.append(cardImg, cardTitle, cardDescription, elevation, coords, effort, removeBtn);
}

// calling the action of functions
window.onload = () => {
    loadMountainList();
    mountainDropdown.onchange = selectMountain;
    viewAllBtn.onclick = loadAllMountains;
    clearAllBtn.onclick = clearAllMountains;
  };