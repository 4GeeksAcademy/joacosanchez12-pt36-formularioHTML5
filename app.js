
let form = document.getElementById('form');
let inputs = document.querySelectorAll('input, select, textarea');
let redAlert = document.getElementById('alert');
window.onload = () => {
  redAlert.style.display = "none";
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    if ((inputs[i].value === "") || (inputs[i].type === "radio" && !inputs[i].checked) || (inputs[i].value === "Pick a state")) {
      inputs[i].style.backgroundColor = "rgba(248, 215, 218, 1)";
      redAlert.style.display = "block";
    } else {
      inputs[i].style.backgroundColor = "white";
      redAlert.style.display = "none";
    };
  };
});

form.addEventListener("change", function () {
  for (let i = 0; i < inputs.length; i++) {
    if ((inputs[i].value === "") || (inputs[i].type === "radio" && !inputs[i].checked) || (inputs[i].value === "Pick a state")) {
      inputs[i].style.borderColor = "red";
    } else {
      inputs[i].style.backgroundColor = "white";
      inputs[i].style.borderColor = "gainsboro";
      redAlert.style.display = "none";
    };
  };
});