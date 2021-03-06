const firstName = "Przemek";
const age = 29;

console.log(firstName);
console.log(age);
console.log(`Siema, nazywam się ${firstName} i mam ${age} lat`);

// const heading = document.querySelector(".main__title--js");

// heading.innerHTML = `Witaj drogi odwiedzający, nazywam się ${firstName} i mam ${age} lat`;

// console.log(heading);

const description = document.querySelector(".week-summary__description--js");

description.innerHTML = `To jest nowy paragraf zmodyfikowany za pomocą JS. Modyfikujący - ${firstName}`;

function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  return myNumber * 7;
}

const myResult = calculate(age);

console.log(myResult);

const button = document.querySelector(".action--js");

console.log(button);

const myClick = () => {
  const heading = document.querySelector(".main__title--js");
  heading.innerHTML = `Witaj drogi odwiedzający, nazywam się ${firstName} i mam ${age} lat`;

  console.log(heading.classList.contains("main__title"));

  heading.classList.toggle("klasa-z-js");
};

button.addEventListener("click", myClick);

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
