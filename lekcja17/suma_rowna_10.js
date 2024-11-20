const field = document.querySelector("#field")

for(let n = 100; n <= 999; n++){
    field.innerHTML += n
    if(n == 999){
        field.innerHTML += "."
    }
    else{
        field.innerHTML += ", "
    }
}