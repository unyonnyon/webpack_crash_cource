import _ from "lodash";
import Lion, { byDouble, TWO } from "./utilities";
import "./style.css";
import logo from "./king035.jpg";

function component() {
  const element = document.createElement("div");
  const array = ["Hello", "Webpack"];
  element.innerHTML = _.join(array, Lion.say());
  return element;
}

console.log(byDouble(TWO));
document.body.appendChild(component());
document.body.appendChild(component());
document.body.classList.add("haikei");

const image = new Image();
image.src = logo;
document.body.appendChild(image);
