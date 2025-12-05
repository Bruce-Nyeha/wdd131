// scripts/main.js — FINAL & FLAWLESS (works with your exact footer HTML)
document.addEventListener("DOMContentLoaded", function () {

  // 1. Current Year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();  // → 2025
  }

  // 2. Last Modified — Clean & Beautiful Format
  const lastModifiedSpan = document.getElementById("lastModified");
  if (lastModifiedSpan) {
    const modDate = new Date(document.lastModified);
    
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const day = modDate.getDate();
    const month = months[modDate.getMonth()];
    const year = modDate.getFullYear();
    const hours = modDate.getHours().toString().padStart(2, '0');
    const minutes = modDate.getMinutes().toString().padStart(2, '0');

    // FINAL OUTPUT: "3 December 2025, 14:27"
    lastModifiedSpan.textContent = `${day} ${month} ${year}, ${hours}:${minutes}`;
  }

  // 3. Contact Form Success Message
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form && message) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      message.textContent = "Thank you! Your message was sent successfully.";
      message.style.color = "#FFD700";
      message.style.fontWeight = "bold";
      message.style.fontSize = "1.2rem";
      form.reset();

      setTimeout(() => { message.textContent = ""; }, 6000);
    });
  }
});