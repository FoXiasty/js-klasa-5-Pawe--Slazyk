const baton = document.querySelector("#baton");
const wynik = document.querySelector("#wynik");

wynik.style.display = "none";

baton.addEventListener("click", () => {
    if(wynik.style.display =="none"){
    wynik.style.display = "inline";
    baton.textContent = "ukryj wynik";
    }
    else{
        wynik.style.display = "none";
        baton.textCeontent = "Pokaż wynik";
    }
})