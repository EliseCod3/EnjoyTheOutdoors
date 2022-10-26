"use strict";

const mountainDropdown = document.getElementById("mountian-dropdown-list");

function loadMountainList() {
    mountainsArray.forEach(mountain => {
        let option = new Option(mountain.name, mountain.name);
        mountainDropdown.appendChild(option);
    });
}

window.onload = () => {
    loadMountainList();
  };