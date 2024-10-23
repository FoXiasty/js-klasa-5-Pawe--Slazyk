const szerokosc = document.querySelector("#szerokosc");
const wysokosc = document.querySelector("#wysokosc");
const kolor = document.querySelector("#kolor");
const baton = document.querySelector("#baton");

baton.addEventListener("click", () => {

szerokosc.value = "cm";
wysokosc.value = "cm";
kolor = kolor.value;

})