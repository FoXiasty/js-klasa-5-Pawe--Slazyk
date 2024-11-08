const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const baton1 = document.querySelector("#baton1");
const baton2 = document.querySelector("#baton2");
const baton3 = document.querySelector("#baton3");

baton1.addEventListener("click", () => {
let cut1 = p1.textContent.toUpperCase();
p1.textContent = cut1
})

baton2.addEventListener("click", () => {
let cut2 = p1.textContent.toLowerCase();
p1.textContent = cut2;
})

baton3.addEventListener("click", () => {
p1.textContent = "Euklides z Aleksandrii (stgr. Εὐκλείδης) - grecki matematyk";
    })