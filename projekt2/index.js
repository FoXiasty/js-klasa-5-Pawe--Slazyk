const model = document.querySelector("#model");
model.addEventListener("change", () => {
    window.location.href = "index.php?model=" + model.value;
});

const img = document.querySelector("#samohud");
const kolor = document.querySelector("#kolor");
kolor.value = "szary";
kolor.addEventListener("change", () => {
    img.src = kolor.value + ".png";
});