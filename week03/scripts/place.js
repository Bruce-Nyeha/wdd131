//  FOOTER DYNAMIC CONTENT
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// WINDCHILL CALCULATOR 
function calculateWindChill(temp, speed) {
  // Formula: °C, km/h → valid only if temp <= 10 && speed > 4.8
  return (temp <= 10 && speed > 4.8)
    ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1)
    : "N/A";
}

// Static values (will be dynamic later)
const temp = 32;  // °C
const wind = 12;  // km/h

// Display result
document.getElementById("temp").textContent = temp;
document.getElementById("wind").textContent = wind;
document.getElementById("windchill").textContent = calculateWindChill(temp, wind);