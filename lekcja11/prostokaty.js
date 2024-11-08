const width = document.querySelector("#szerokosc");
const height = document.querySelector("#wysokosc");
const color = document.querySelector("#kolor");
const draw = document.querySelector("#baton");
const rect = document.querySelector("#rect");
const obw = document.querySelector("#obw");
const pole = document.querySelector("#pole");

draw.addEventListener("click", () => {
    rect.style.width = width.value + "cm";
    rect.style.height = height.value + "cm";
    rect.style.backgroundColor = color.value;

    obw.textContent = `Obwód prostokąta jest równy ${width.value * 2 + height.value * 2}cm`;
    pole.textContent = `Pole prostokąta jest równe ${width.value * height.value}cm²`; 
});
