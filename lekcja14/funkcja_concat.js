const p1 = document.querySelector("#p1");
const baton1 = document.querySelector("#baton1");

baton1.addEventListener("click", () => {
let concat = p1.textContent.concat("!");
p1.textContent = concat
})