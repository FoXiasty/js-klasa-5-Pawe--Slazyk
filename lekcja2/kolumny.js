//1
document.querySelector('header').style.backgroundColor='yellow';

//2
let h1 = document.querySelector("header h1");
console.log(h1);
h1.style.fontFamily = "Arial Black";
h1.textContent = "Preambuła";

//3
document.querySelector('section').style.border;

//4
let h1_section = document.querySelector("section.main_column h1");
console.log(h1_section);
h1_section.textContent = "Specjalność szefa";

//5
let p = document.createElement("p");
p.textContent = "misiany misiany";
document.querySelector(".main_column").append(p);

//6
let div = document.createElement("div");
div.style.backgroundColor = "pink";
let p2 = document.createElement("p");
p2.textContent = "&copy";
p2.style.textAlign = "center"
div.append(p2);

//7


//8
let p_1 = document.createElement("p");
let p_2 = document.createElement("p");
p_1.innerHTML = "<i>Pochylony tekst</i>";
p_2.innerHTML = "<i>Pochylony tekst</i>";
let header = document.querySelector("header");
header.append(p_1);
header.append(p_2);