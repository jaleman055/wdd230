function updateOverlayText() {
    // Get the overlay div
    var overlay = document.querySelector('.overlay');
  
    // Check the viewport width and update the overlay text
    if (window.innerWidth <= 599) {
      overlay.textContent = 'Small';
    } else if (window.innerWidth <= 899) {
      overlay.textContent = 'Medium';
    } else {
      overlay.textContent = 'Large';
    }
  }
  
  // Run the function when the page loads
  window.onload = updateOverlayText;
  
  // Also run the function when the window is resized
  window.onresize = updateOverlayText;
  