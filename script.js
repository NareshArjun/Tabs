"use strict";

(function () {
  //Tabs working for multiple tabs scenario

  var tab_heading = document.querySelectorAll(".tab_heading");

  for (var i = 0; i < tab_heading.length; i++) {
    (function (i) {
      tab_heading[i].addEventListener("click", function (e) {
        var tab_heading_name = e.target.innerText;
        var tabs_children = e.target.parentElement.children;
        for (var j = 0; j < tabs_children.length; j++) {
          if (tabs_children[j].innerText === tab_heading_name) {
            var tab_heading_index = j;
          }
          if (tabs_children[j].classList.contains("display_container")) {
            var display_container_children = tabs_children[j].children;
            for (var k = 0; k < display_container_children.length; k++) {
              display_container_children[k].classList.add("hidden");
            }
            display_container_children[tab_heading_index].classList.remove("hidden");
          }
        }
      });
    })(i);
  }

  //Tabs working for multiple tabs scenario (but Ram said it's 2nd way)

  /*tabs.forEach(function (tab) {

    var tab_heading = tab.querySelectorAll(".tab_heading");
    var tab_content = tab.querySelectorAll(".tab_content");

    console.log(tab_heading);
    console.log(tab_content);

    for (var i = 0; i < tab_heading.length; i++) {
      (function (i) {
        tab_heading[i].addEventListener("click", function () {
          console.log(tab_heading[i], "Button clicked");
          for (var j = 0; j < tab_heading.length; j++) {
            tab_content[j].classList.add("hidden");
          }
          tab_content[i].classList.remove("hidden");
        });
      })(i);
    }
  });*/

  //Tabs working for single tab

  /*var tab_heading = document.querySelectorAll(".tab_heading");
  var tab_content = document.querySelectorAll(".tab_content");

  console.log(tab_heading);
  console.log(tab_content);

  for (var i = 0; i < tab_heading.length; i++) {
    (function (i) {
      tab_heading[i].addEventListener("click", function () {
        console.log(tab_heading[i], "Button clicked");
        for (var j = 0; j < tab_heading.length; j++) {
          tab_content[j].classList.add("hidden");
        }
        tab_content[i].classList.remove("hidden");
      });
    })(i);
  }*/

  //Variable hoisting example

  /*console.log(a, b);
  getA();

  let a = 0;
  let b = 10;
  function getA() {
    console.log("Hellllloooooooo");
  }*/
})();
