// Get the modal
var modal = document.getElementById("myModal");

var recipeText = document.getElementsByClassName("recipeText");

var recipe2content = document.getElementById("recipe2content").innerText;
//set innerText to recipe contents, set modal-content-1, 2, etc to just modal-content
console.log(document.querySelectorAll("#modal-1")[0].children[1].innerText);
console.log(document.querySelectorAll("#modal-2")[0].children[1].innerText);
// console.log(document.querySelectorAll("#modal-3")[0].children[1].innerText);
// console.log(document.querySelectorAll("#modal-4")[0].children[1].innerText);
// console.log(document.querySelectorAll("#modal-5")[0].children[1].innerText);

//outerText
// this.style.display
var btn1 = document.getElementById("myBtn-1");
var btn2 = document.getElementById("myBtn-2");
// var btn3 = document.getElementById("myBtn-3");
// var btn4 = document.getElementById("myBtn-4");
// var btn5 = document.getElementById("myBtn-5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function () {
  modal.style.display = "block";
  document.querySelectorAll("#modal-2")[0].children[1].innerText;
};

btn2.onclick = function () {
  modal.style.display = "block";
  var innerTextOutput = document.getElementById("recipe2content").innerText;
  recipe2content.value = source.innerText;
  console.log(recipe2content);
};

// btn3.onclick = function () {
//   modal.style.display = "block";
// };

// btn4.onclick = function () {
//   modal.style.display = "block";
// };

// btn5.onclick = function () {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
