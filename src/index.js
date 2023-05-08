const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updates = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updates();
};

const handleMinus = () => {
  count = count - 1;
  updates();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
