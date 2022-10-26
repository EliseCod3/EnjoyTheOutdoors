"use strict";
// grab elements from html
const mountainDropdown = document.getElementById("mountian-dropdown-list");
const displaySection = document.getElementById("display-section");

// Add the datalist of mountains to html dropdown
function loadMountainList() {
    mountainsArray.forEach(mountain => {
        let option = new Option(mountain.name, mountain.name);
        mountainDropdown.appendChild(option);
    });
}

// select the mountain in dropdown and call function to display card
function selectMountain() {
    const selectedMountain = mountainDropdown.value;
    for (const mountain of mountainsArray) {
        if (mountain.name == selectedMountain) {
            buildCard(mountain)
        }
    }
}

// create the card to be displayed
function buildCard(mountain) {
    // create cardbody and put in display section
    let cardSection = document.createElement("div");
    cardSection.className = "card";
    displaySection.appendChild(cardSection);

    // card image
    let cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.alt = mountain.name;
    cardImg.src = "images/" + mountain.img;

    // card head title
    let cardTitle = document.createElement("h3")
    cardTitle.className = "card-title";
    cardTitle.innerText = mountain.name;

    let cardDescription = document.createElement("p")


    
}

// calling the action of functions
window.onload = () => {
    loadMountainList();
    mountainDropdown.onchange = selectMountain;
  };