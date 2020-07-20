// Write your code here!

document.querySelector("main#main").remove();
const a = document.createElement("h1");
document.body.appendChild(a);
a.id = "victory";
const newHeader = document.querySelector("h1#victory");
newHeader.innerHTML = "YOUR-NAME is the champion"