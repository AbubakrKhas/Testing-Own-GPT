const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

// Setze die gewünschten Schwellenwerte hier
const upperThresholdHeight = 85;
const lowerThresholdHeight = 260;
const middleWidthThreshold = 180; // Neuer Schwellenwert für die Breite im mittleren Bereich

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText =
      "left: " + e.clientX + "px; top: " + e.clientY + "px;";

    // Überprüfe, ob die Maus den oberen Schwellenwert erreicht hat und der Benutzer nach oben gescrollt hat
    if (e.clientY <= upperThresholdHeight && window.scrollY === 0) {
      // Hintergrundfarbe ändern, wenn die Maus den oberen Schwellenwert erreicht und der Benutzer nach oben gescrollt hat
      cursor.classList.add('link-grow');
    } else if (
      e.clientY >= window.innerHeight - lowerThresholdHeight &&
      window.scrollY > 0 &&
      e.clientX >= window.innerWidth / 2 - middleWidthThreshold / 2 &&
      e.clientX <= window.innerWidth / 2 + middleWidthThreshold / 2
    ) {
      // Überprüfe die Breite im mittleren Bereich, wenn die Maus den unteren Schwellenwert erreicht und der Benutzer nach unten gescrollt hat
      cursor.classList.add('link-grow');
    } else {
      // Zurücksetzen auf Standardfarbe in anderen Fällen
      cursor.classList.remove('link-grow');
    }
  });
});
