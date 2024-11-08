const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const baton = document.querySelector("#baton");
const utput = document.querySelector("#utput")
const utput2 = document.querySelector("#utput2")

function addOutput(content) {
    const li = document.createElement("li");
    li.innerHTML = content;
    utput.append(li);
}

a3.addEventListener("change", () => {
    a3.value = Math.floor(Math.abs(a3.value));
});

document.querySelector("#baton").addEventListener("click", () => {
    utput.innerHTML = "";
    utput2.textContent = "";
    if (!a3.value || a3.value < 1) {
        utput2.textContent = "liczba ma być rzeczywista i >=1";
        return;
    }
    const V1 = parseFloat(a1.value);
    if (isNaN(V1)) {
        utput2.textContent = "Pierwsza liczba ciągu musi być liczbą rzeczywistrą.";
        return;
    }
    const V2 = parseFloat(a2.value);
    if (isNaN(V2)) {
        utput2.textContent = "Druga liczba ciągu musi być liczbą rzeczywistą.";
        return;
    }
    const diff = V2 - V1;

    if (a3.value >= 1) addOutput("a<sub>1</sub> = " + V1);
    if (a3.value >= 2) addOutput("a<sub>2</sub> = " + (V1 + diff));
    if (a3.value >= 3) addOutput("a<sub>3</sub> = " + (V1 + 2 * diff));
    if (a3.value > 6) addOutput("...");
    if (a3.value >= 4) addOutput("a<sub>" + (a3.value - (a3.value - 4)) + "</sub> = " + (V1 + (a3.value - (a3.value - 4)) * diff));
    if (a3.value >= 5) addOutput("a<sub>" + (a3.value - (a3.value - 5)) + "</sub> = " + (V1 + (a3.value - (a3.value - 5)) * diff));
    if (a3.value >= 6) addOutput("a<sub>" + a3.value + "</sub> = " + (V1 + a3.value * diff));

    const sum = (V1 + a3.value * diff) / 2 * a3.value;
    utput2.textContent = "Suma " + a3.value + " początkowych wyrazów ciągu: " + sum;
})