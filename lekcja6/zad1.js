const hiddeninput = document.querySelector('#hidden-iput');
const output_div = document.querySelector('#utput');

console.log(hiddeninput.dataset);
document.querySelector("#rah").addEventListener("click", () => {
    output_div.innerHTML = "";
    const input1 = document.createElement("input");
    input1.value = hiddeninput.dataset.song1;
   
    const input2 = document.createElement("input");
    input2.value = hiddeninput.dataset.song2;

    const input3 = document.createElement("input");
    input3.value = hiddeninput.dataset.song3;

    output_div.appendChild(input1);
    output_div.appendChild(input2);
    output_div.appendChild(input3);
})