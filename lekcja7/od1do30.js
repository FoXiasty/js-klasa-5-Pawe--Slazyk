const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");

document.querySelector("#baton").addEventListener("click", () => {
    let losowa = Math.floor(Math.random() * 30) + 1;
    p1.textContent = "Wylosowana liczba to:" + losowa;
    if (losowa >= 20) { p2.textContent = "wylosowana liczba  jest większa lób równa  20"; }
    else{ p2.textContent = "nie."; }
    
    if (losowa == 2) { p3.textContent = "wylosowana liczba jest liczbą parzystą";p3.style.color = "navy"; p3.style.fontWeight = "bold"; }
    if (losowa == 4) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 6) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 8) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 10) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 12) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 14) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 16) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 18) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 20) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 22) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 24) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 26) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 28) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 30) { p3.textContent = "wylosowana liczba jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}

    if (losowa == 1) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 3) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 5) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 7) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 9) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 11) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 13) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 15) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 17) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 19) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 21) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 23) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 25) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 27) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}
    if (losowa == 29) { p3.textContent = "wylosowana liczba nie jest liczbą parzystą"; p3.style.color = "navy"; p3.style.fontWeight = "bold";}

    if (losowa == 1) { p4.textContent = "pierwsza dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 2) { p4.textContent = "pierwsza dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 3) { p4.textContent = "pierwsza dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 4) { p4.textContent = "pierwsza dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 5) { p4.textContent = "pierwsza dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 6) { p4.textContent = "pierwsza dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 7) { p4.textContent = "pierwsza dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 8) { p4.textContent = "pierwsza dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 9) { p4.textContent = "pierwsza dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 10) { p4.textContent = "pierwsza dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}

    if (losowa == 11) { p4.textContent = "druga dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 12) { p4.textContent = "druga dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 13) { p4.textContent = "druga dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 14) { p4.textContent = "druga dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 15) { p4.textContent = "druga dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 16) { p4.textContent = "druga dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 17) { p4.textContent = "druga dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 18) { p4.textContent = "druga dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 19) { p4.textContent = "druga dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 20) { p4.textContent = "druga dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}

    if (losowa == 21) { p4.textContent = "trzecia dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 22) { p4.textContent = "trzecia dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 23) { p4.textContent = "trzecia dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 24) { p4.textContent = "trzecia dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 25) { p4.textContent = "trzecia dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 26) { p4.textContent = "trzecia dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 27) { p4.textContent = "trzecia dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 28) { p4.textContent = "trzecia dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 29) { p4.textContent = "trzecia dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}
    if (losowa == 30) { p4.textContent = "trzecia dziesiątka"; p4.style.color = "deeppink"; p4.style.fontWeight = "bold";}


})