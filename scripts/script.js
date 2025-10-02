let openMenuButton = document.querySelector("nav:nth-of-type(2) button");
let sluitMenuButton = document.querySelector("nav:nth-of-type(3) button");
let menuNav = document.querySelector("nav:nth-of-type(3)");

function openMenu() {
    menuNav.classList.add("is-open");
}

function sluitMenu() {
    menuNav.classList.remove("is-open");
}

openMenuButton.addEventListener("click", openMenu);
sluitMenuButton.addEventListener("click", sluitMenu);

/*https://codepen.io/ oefening burger menu */