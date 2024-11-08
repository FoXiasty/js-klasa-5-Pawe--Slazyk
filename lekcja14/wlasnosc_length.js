const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const baton = document.querySelector("#baton");

baton.addEventListener("click", () => {
    let dlugosc = "Tekst powyżej ma długość " + p1.textContent.length + " znaków";
    p2.textContent = dlugosc;
})