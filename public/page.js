    // JavaScript to switch between the pages

    // Go to weather page when clicking "Get Started"
    document.getElementById('get-started').addEventListener('click', function() {
        document.getElementById('intro-page').style.display = 'none';  // Hide intro page
        document.getElementById('weather-page').style.display = 'block';  // Show weather page
        document.getElementById('abt').style.display = 'none';  // Hide about page
    });

    // Go back to the intro page when clicking "Home"
    document.getElementById('home').addEventListener('click', function() {
        document.getElementById('weather-page').style.display = 'none';  // Hide weather page
        document.getElementById('intro-page').style.display = 'block';  // Show intro page
        document.getElementById('abt').style.display = 'none';  // Hide about page
    });

    document.getElementById('home1').addEventListener('click', function() {
        document.getElementById('weather-page').style.display = 'none';  // Hide weather page
        document.getElementById('intro-page').style.display = 'block';  // Show intro page
        document.getElementById('abt').style.display = 'none';  // Hide about page
    });

    document.getElementById('about1').addEventListener('click', function() {
        document.getElementById('weather-page').style.display = 'none';  // Hide weather page
        document.getElementById('intro-page').style.display = 'none';  // Hide intro page
        document.getElementById('abt').style.display = 'block';  // Show about page
    });

    document.getElementById('about2').addEventListener('click', function() {
        document.getElementById('weather-page').style.display = 'none';  // Hide weather page
        document.getElementById('intro-page').style.display = 'none';  // Hide intro page
        document.getElementById('abt').style.display = 'block';  // Show about page
    });
