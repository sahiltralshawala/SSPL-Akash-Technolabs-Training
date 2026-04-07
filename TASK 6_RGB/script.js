const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const preview = document.getElementById("preview");
const colorValue = document.getElementById("colorValue");

function updateColor(){

    const r = red.value;
    const g = green.value;
    const b = blue.value;

    const rgb = `rgb(${r}, ${g}, ${b})`;

    preview.style.background = rgb;
    colorValue.textContent = rgb;
}

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);