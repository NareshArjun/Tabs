"use strict";

const buttontabs = document.querySelectorAll(".tabs");
const para_content = document.querySelectorAll(".tabs_1_content");

/*console.log(buttontabs);
console.log(para_content);*/

for (let i = 0; i < buttontabs.length; i++) {
  buttontabs[i].addEventListener("click", function () {
    console.log(buttontabs[i], "Button clicked");
    for (let j = 0; j < buttontabs.length; j++) {
      para_content[j].classList.add("hidden");
    }
    para_content[i].classList.remove("hidden");
  });
}
