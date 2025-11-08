// Footer dynamic content
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu toggle
const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !expanded);
    navMenu.classList.toggle("open");
    
    // Change hamburger to X
    menuButton.textContent = expanded ? "☰" : "X";
});

