import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const conutModifier = (state = 0) => {
  return state;
};

const countStore = createStore(conutModifier);
console.log(countStore.getState());
