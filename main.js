const firstName = "Przemek";
const age = 29;

console.log(firstName);
console.log(age);
console.log(`Siema, nazywam się ${firstName} i mam ${age} lat`);

const heading = document.querySelector(".main__title--js");

heading.innerHTML = `Witaj drogi odwiedzający, nazywam się ${firstName} i mam ${age} lat`;

console.log(heading);

const description = document.querySelector(".week-summary__description--js");

description.innerHTML = `To jest nowy paragraf zmodyfikowany za pomocą JS. Modyfikujący - ${firstName}`;
