document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");
  const cursor2 = document.querySelector(".cursor2");

  // Set the desired threshold values here
  const upperThresholdHeight = 45;
  const lowerThresholdHeight = 260;
  const middleWidthThreshold = 180;

  document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText =
      "left: " + e.clientX + "px; top: " + e.clientY + "px;";

    // Check if the mouse has reached the upper threshold and the user has scrolled up
    if (e.clientY <= upperThresholdHeight && window.scrollY === 0) {
      // Change background color if the mouse has reached the upper threshold and the user has scrolled up
      cursor.classList.add('link-grow');
    } else if (
      e.clientY >= window.innerHeight - lowerThresholdHeight &&
      window.scrollY > 0 &&
      e.clientX >= window.innerWidth / 2 - middleWidthThreshold / 2 &&
      e.clientX <= window.innerWidth / 2 + middleWidthThreshold / 2
    ) {
      // Check the width in the middle area if the mouse has reached the lower threshold and the user has scrolled down
      cursor.classList.add('link-grow');
    } else {
      // Reset to the default color in other cases
      cursor.classList.remove('link-grow');
    }
  });



  document.addEventListener('mousemove', function (e) {
    // Add elements to body
    let element = document.createElement('div');
    element.className = 'element';
    document.body.prepend(element);

    // Set the position based on the cursor position
    element.style.left = e.clientX + 'px';
    element.style.top = e.clientY - 10 + 'px';

    setTimeout(() => {
      let text = document.querySelectorAll('.element')[0],
        directionX = Math.random() < 0.5 ? -1 : 1,
        directionY = Math.random() < 0.5 ? -1 : 1;

      // Move elements randomly across x and y axis
      text.style.left = parseInt(text.style.left) - directionX * (Math.random() * 200) + 'px';
      text.style.top = parseInt(text.style.top) - directionY * (Math.random() * 200) + 'px';
      text.style.opacity = 0;
      text.style.transform = 'scale(0.25)';
      text.innerHTML = randomText();

      // Remove elements
      setTimeout(() => {
        element.remove();
      }, 1000);
    }, 10);
  });

  function randomText() {
    let text = 'px0101'.split('');
    let letter = text[Math.floor(Math.random() * text.length)];
    return letter;
  }
});