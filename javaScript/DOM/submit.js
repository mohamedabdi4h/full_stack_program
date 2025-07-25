const formSubmit = document.getElementById("form-submit");
const inputAdd = document.getElementById("input-add");
const lists = document.getElementById("lists");

formSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputAdd.value === "") {
    return;
  } else {
    inputAdd.value;

    const p = document.createElement("p");
    p.innerHTML = inputAdd.value;
    lists.appendChild(p);
     inputAdd.value =""
  }
});
