console.log("jestem tu")
function validateForm() {
    let isValid = true;

    const pesel = document.getElementById("pesel");
    const imie = document.getElementById("imie");
    const nazwisko = document.getElementById("nazwisko");
    const kolor = document.getElementsByName("kolor_oczu");

    pesel.style.backgroundColor = "";
    imie.style.backgroundColor = "";
    nazwisko.style.backgroundColor = "";
    kolor.forEach(radio => radio.style.outline = "");

    if (pesel.value.trim() === "" || pesel.value.length !== 11) {
        console.log("dsfsdfsd")
        pesel.style.backgroundColor = "lightcoral";
        isValid = false;
    }

    if (imie.value.trim() === "") {
        imie.style.backgroundColor = "lightcoral";
        isValid = false;
    }   

    if (nazwisko.value.trim() === "") {
        nazwisko.style.backgroundColor = "lightcoral";
        isValid = false;
    }


    
    return isValid;
}