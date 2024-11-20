const form = document.querySelector("#form")

for(let n = 1; n <= 100; n++){
    const input = document.createElement("input");
input.id = "n" + n;
input.name = "tak";
input.style.margin = "10px";
input.style.boxShadow = "5px  5px 0 lightblue";
input.placeholder = "Element numer" + n;
form.append(input);

if(n % 5 ==0){
    form.append(document.createElement("br"));
}

}

