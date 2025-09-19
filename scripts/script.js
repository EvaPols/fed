// JavaScript Document
// console.log("hi");

// let openMenuButton = document.querySelector("nav:nth-of-type(2) button");

// // stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
// openMenuButton.addEventListener("click", openMenu);

// // stap 3: voeg in de functie een class toe aan de nav

// function openMenu() {
//   let deNav = document.querySelector("nav:nth-of-type(3)");
//   deNav.classList.add("is-open")
// }

// let sluitMenuButton = document.querySelector("header nav button");

// // stap 2 - laat die button luisteren naar kliks
// sluitMenuButton.addEventListener("click", sluitMenu);

// // stap 3 - in de functie verwijder de class van de nav
// function sluitMenu() {
//   let deNav = document.querySelector("header nav");
//    deNav.classList.remove("is-open");
// }

console.log("hi");

// selecteer knoppen
let openMenuButton = document.querySelector("nav:nth-of-type(2) button");
let sluitMenuButton = document.querySelector("nav:nth-of-type(3) button");
let menuNav = document.querySelector("nav:nth-of-type(3)");

// open menu
openMenuButton.addEventListener("click", function() {
  menuNav.classList.add("is-open");
});

// sluit menu
sluitMenuButton.addEventListener("click", function() {
  menuNav.classList.remove("is-open");
});
