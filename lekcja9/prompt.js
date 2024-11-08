document.querySelector("#pokaz").addEventListener("click", ()=>{
    let imie = prompt("Podaj numer karty");
    if(imie != null) {
        alert("Witaj " + imie);
    } else {
        alert("Anulowałeś akcję, a okienko zwróciło " + imie);
    }
});