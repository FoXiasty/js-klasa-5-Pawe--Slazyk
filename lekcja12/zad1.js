const n1 = document.querySelector("#n1")
const n2 = document.querySelector("#n2")
const n3 = document.querySelector("#n3")
const n4 = document.querySelector("#n4")

function nyg() {
    n3.value = Math.floor(n1.value / n2.value);
    n4.value = n1.value % n2.value 
}

n1.addEventListener("change", nyg )
n2.addEventListener("change", nyg )
