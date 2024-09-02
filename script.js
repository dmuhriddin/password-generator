const input = document.querySelector(".input-box input"),
  select = document.querySelector(".content select"),
  btn = document.querySelector(".container button"),
  copyBtn = document.querySelector(".fa-copy");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let symbols = "!@#$%^&*()_+-={}[]|:;'<>?,./";
let numbers = "0123456789";

let password = "";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  password = "";

  let passwordLength = select.value;

  let generateUpperText = "";
  let generateLowerText = "";
  let generateSymbol = "";
  let generateNumber = "";

  for (let i = 1; i <= passwordLength; i++) {
    generateUpperText +=
      upperCase[Math.floor(Math.random() * upperCase.length)];
    generateLowerText +=
      lowerCase[Math.floor(Math.random() * lowerCase.length)];
    generateSymbol += symbols[Math.floor(Math.random() * symbols.length)];
    generateNumber += numbers[Math.floor(Math.random() * numbers.length)];
  }
  password += generateUpperText.slice(0, passwordLength / 4);
  password += generateLowerText.slice(0, passwordLength / 4);
  password += generateSymbol.slice(0, passwordLength / 4);
  password += generateNumber.slice(0, passwordLength / 4);

  shuffleString(password);
});

function shuffleString(str) {
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    newString += str[Math.floor(Math.random() * str.length)];
  }

  input.value = newString;
}

copyBtn.addEventListener("click", () => {
  if (input.value) {
    navigator.clipboard.writeText(input.value);
  }
});
