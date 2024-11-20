const zespol = [];

function zespolyes() {
    document.querySelector("#p1").textContent = 
        "Deep Purple - brytyjski zespół rockowy, założony w 1968 w składzie: " + 
        zespol.filter(String).join(", ") +
        ".";
}

document.querySelector("#baton1").addEventListener("click", () => {
    zespol[0] = "Ritchie Blackmore";
    zespolyes();
});
document.querySelector("#baton2").addEventListener("click", () => {
    zespol[1] = "Jon Lord";
    zespolyes();
});
document.querySelector("#baton3").addEventListener("click", () => {
    zespol[2] = "Nick Simper";
    zespolyes();
});
document.querySelector("#baton4").addEventListener("click", () => {
    zespol[3] = "Ian Paice";
    zespolyes();
});
document.querySelector("#baton5").addEventListener("click", () => {
    zespol[4] = "Rod Evans";
    zespolyes();
});