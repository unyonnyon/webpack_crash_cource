import _ from "lodash";

function component() {
  const element = document.createElement("div");
  const array = ["Hello", "Webpack"];
  element.innerHTML = _.join(array, "xxxxx");
  return element;
}

document.body.appendChild(component());
document.body.appendChild(component());
