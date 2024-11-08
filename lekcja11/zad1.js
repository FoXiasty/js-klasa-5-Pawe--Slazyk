const abs = document.querySelector("#abs");
const ceil = document.querySelector("#ceil");
const floor = document.querySelector("#floor");
const max = document.querySelector("#max");
const min = document.querySelector("#min");
const pow = document.querySelector("#pow");
const round = document.querySelector("#round");
const sqrt = document.querySelector("#sqrt");


let liczba = parseFloat(prompt("podaj dowolną liczbę rzeczywistą"));
if(isNaN(liczba)){
alert("downie imbecylu liczbe miałeś podać")
}
else{
abs.textContent = "abs(" + liczba + ") =" + Math.abs(liczba);
ceil.textContent = "ceil(" + liczba + ") =" + Math.ceil(liczba);
floor.textContent = "floor(" + liczba + ") =" + Math.floor(liczba);
max.textContent = "max(" + liczba + ") =" + Math.max(liczba);
min.textContent = "min(" + liczba + ") =" + Math.min(liczba);
pow.textContent = "pow(" + liczba + ") =" + Math.pow(liczba);
round.textContent = "round(" + liczba + ") =" + Math.round(liczba);
sqrt.textContent = "sqrt(" + liczba + ") =" + Math.sqrt(liczba);
}
