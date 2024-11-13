const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const baton1 = document.querySelector("#baton1");
const baton2 = document.querySelector("#baton2");

baton1.addEventListener("click", () => {
console.log(p1.textContent.split("|"));
})

baton2.addEventListener("click", () => {
console.log(p2.textContent.split(" ").slice(0,16));
})