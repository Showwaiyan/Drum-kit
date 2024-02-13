"use strict"

const drumKit = document.querySelector(".drum-kit");

drumKit.addEventListener("click",playSoundWithMouse);

function playSoundWithMouse(event) {
    if (event.target.className === "drum-set") new Audio(`sounds/${event.target.id}.wav`).play();
    else if (event.target.parentElement.className === "drum-set") new Audio(`sounds/${event.target.parentElement.id}.wav`).play();
}


document.addEventListener("keydown",playSoundWithKey);

function playSoundWithKey(event){
    const keyPair = {
        A:"clap",
        S:"hihat",
        D:"kick",
        F:"openhat",
        G:"boom",
        H:"ride",
        J:"snare",
        K:"tom",
        L:"tink"
    };
    if(event.key.toUpperCase() in keyPair) new Audio(`sounds/${keyPair[event.key.toUpperCase()]}.wav`).play();
}