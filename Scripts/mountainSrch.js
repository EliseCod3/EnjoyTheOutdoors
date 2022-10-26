"use strict";

const mountainDropdown = document.getElementById("mountian-dropdown-list");

function loadMountainList() {
    mountainsArray.forEach(mountain => {
        let option = new Option(mountain.name, mountain.name);
        mountainDropdown.appendChild(option);
    });
}

function selectMountain() {
    const selectedMountain = mountainDropdown.value;
    for (const mountain of mountainsArray) {
        if (mountain.name == selectedMountain) {
            buildCard(mountain)
        }
    }
}

function buildCard(mountain) {
    const cardSection = document.createElement("div");
    cardSection.className.add
    
}

window.onload = () => {
    loadMountainList();
    mountainDropdown.onchange = selectMountain;
  };