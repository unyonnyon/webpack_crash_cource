import _ from "lodash";
import Lion, { byDouble, TWO } from "./utilities";

function component() {
  const element = document.createElement("div");
  const array = ["Hello", "Webpack"];
  element.innerHTML = _.join(array, Lion.say());
  return element;
}

console.log(byDouble(TWO));
document.body.appendChild(component());
document.body.appendChild(component());
