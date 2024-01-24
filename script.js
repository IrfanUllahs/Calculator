let result = document.querySelector("h2");
// console.log(result.innerHTML);
let buttons = document.querySelectorAll("button");
let btnArr = Array.from(buttons);
let string = "";
btnArr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      result.innerHTML = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      result.innerHTML = string;
    } else if (e.target.innerHTML == "DEL") {
      //    console.log(typeof string);
      if (typeof string == "number") {
        string = String(string);
        string = string.substring(0, string.length - 1);
        result.innerHTML = string;
      } else {
        string = string.substring(0, string.length - 1);
        result.innerHTML = string;
      }
    } else {
      string += e.target.innerHTML;
      result.innerHTML = string;
    }
  });
});
