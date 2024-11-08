const p1 = document.querySelector("#p1");
const baton1 = document.querySelector("#baton1");
const baton2 = document.querySelector("#baton2");

baton1.addEventListener("click", () => {
let padStart = p1.textContent.padStart(20,"_");
p1.textContent = padStart
})

baton2.addEventListener("click", () => {
let padEnd = p1.textContent.padEnd(30,".");
p1.textContent = padEnd;
})