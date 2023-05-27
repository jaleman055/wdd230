window.onload = function() {
    // Get temperature and wind speed values from HTML
    var temperature = parseFloat(document.getElementById('temperature').textContent);
    var windSpeed = parseFloat(document.getElementById('windSpeed').textContent);
  
    // Check if temperature and wind speed meet the requirements for calculating wind chill
    if (temperature <= 50 && windSpeed > 3.0) {
      // Calculate wind chill factor
      var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
      // Round wind chill factor to one decimal place
      windChill = Math.round(windChill * 10) / 10;
    } else {
      // If temperature and wind speed do not meet the requirements, set wind chill factor to "N/A"
      var windChill = "N/A";
    }
  
    // Display wind chill factor in HTML
    document.getElementById('windChill').textContent = windChill;
  }

  