const baton = document.querySelector("#baton");
const tekst = document.querySelector("#tekst");
tekst.value = "Odblokuj edyte";
tekst.setAttribute("disabled", "");
let textValue =""

baton.addEventListener("click", () => {
    tekst.toggleAttribute("disabled")
    if(tekst.hasAttribute("disabled")){
        baton.textContent = "Edycja jest teraz nie możliwa";
        textValue = tekst.value;
        tekst.value = "Odblokuj edyte";
    }
    else{
        baton.textContent = "Można edytować";
        tekst.value = textValue;
    }
})