const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
  { templeName: "Manti Utah", location: "Manti, Utah, USA", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
  { templeName: "Payson Utah", location: "Payson, Utah, USA", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
  { templeName: "Washington D.C.", location: "Kensington, Maryland, USA", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
  { templeName: "Accra Ghana", location: "Accra, Ghana", dedicated: "2004, January, 11", area: 17500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-758797-wallpaper.jpg" },
  { templeName: "Salt Lake", location: "Salt Lake City, Utah, USA", dedicated: "1893, April, 6", area: 253015, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8451.jpg" },
  { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019, March, 10", area: 41010, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3544.jpg" }
];

const gallery = document.getElementById("templeGallery");
const menuBtn = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

function showTemples(list) {
  gallery.innerHTML = "";
  list.forEach(t => {
    gallery.innerHTML += `
      <figure class="temple-card">
        <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
        <h3>${t.templeName}</h3>
        <p><strong>Location:</strong> ${t.location}</p>
        <p><strong>Dedicated:</strong> ${t.dedicated}</p>
        <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
      </figure>
    `;
  });
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    const filter = link.dataset.filter;
    let filtered = temples;

    if (filter === "old") filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
    else if (filter === "new") filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
    else if (filter === "large") filtered = temples.filter(t => t.area > 90000);
    else if (filter === "small") filtered = temples.filter(t => t.area < 10000);

    showTemples(filtered);
  });
});

// Hamburger menu
menuBtn.addEventListener("click", () => {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", !expanded);
  navMenu.classList.toggle("open");
  menuBtn.textContent = expanded ? "Menu" : "X";
});

// Load all temples on start
showTemples(temples);