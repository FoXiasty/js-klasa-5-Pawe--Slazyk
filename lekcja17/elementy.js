document.querySelector("#baton").addEventListener("click", () => {
    const div = document.querySelector("div")
    const tak = div.querySelectorAll("*")
    console.log(tak);
    for(const nie of tak){
        if(nie.tagName == "STRONG"){
           nie.style.border = "dotted 10px green" 
        }
    }
})