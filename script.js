"use strict"

const drumKit = document.querySelector(".drum-kit");

drumKit.addEventListener("click",playSoundWithMouse);

function playSoundWithMouse(event) {
    if (event.target.className === "drum-set") new Audio(`sounds/${event.target.id}.wav`).play();
    else if (event.target.parentElement.className === "drum-set") new Audio(`sounds/${event.target.parentElement.id}.wav`).play();
}
