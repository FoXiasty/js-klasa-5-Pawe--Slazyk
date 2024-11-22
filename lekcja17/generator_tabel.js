const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");

const baton = document.querySelector("#baton");

const tabela = document.querySelector("#tabela");

baton.addEventListener("click", () =>{
    tabela.innerHTML = "";

    if(input1.value > 500) window.close();
    if(input2.value > 500) window.close();

    for(let n = 0; n ; n++){

    }
})