const firstName = "Przemek";
const age = 29;

console.log(firstName);
console.log(age);
console.log(`Siema, nazywam się ${firstName} i mam ${age} lat`);

const heading = document.querySelector(".main-heading--js");

heading.innerHTML = `Witaj drogi odwiedzający, nazywam się ${firstName} i mam ${age} lat`;

console.log(heading);
