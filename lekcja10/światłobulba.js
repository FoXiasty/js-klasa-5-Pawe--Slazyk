const światłobulba = document.querySelector("#nie");
const batontak = document.querySelector("#batontak");
const batonnie = document.querySelector("#batonnie");
const radiotak = document.querySelector("#radiotak");
const radionie = document.querySelector("#radionie");
radionie.checked = true;

const box = document.querySelector("#box");
box.checked = false;

batontak.addEventListener("click", () => {
    światłobulba.src = "światłobulbatak.jpg";
    radiotak.checked = true;
    box.checked = true;
})

batonnie.addEventListener("click", () => {
    światłobulba.src = "światłobulbanie.jpg";
    radionie.checked = true;
    box.checked = false;
})

radiotak.addEventListener("click", () => {
    światłobulba.src = "światłobulbatak.jpg";
    box.checked = true;
})

radionie.addEventListener("click", () => {
    światłobulba.src = "światłobulbanie.jpg";
    box.checked = false;
})

box.addEventListener("click", () => {
    if(box.checked){
        światłobulba.src = "światłobulbatak.jpg";
        radiotak.checked = true
    }
    else{
        światłobulba.src = "światłobulbanie.jpg";
        radionie.checked = true
    }
})