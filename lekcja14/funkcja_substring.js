const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const baton1 = document.querySelector("#baton1");
const baton2 = document.querySelector("#baton2");

baton1.addEventListener("click", () => {
let cut1 = p1.textContent.substring(9,19);
p2.textContent = cut1
})

baton2.addEventListener("click", () => {
let cut2 = p1.textContent.substring(27);
p3.textContent = cut2;
})