// Get the button element
const discoverBtn = document.getElementById('discoverBtn');

// Add the click event
discoverBtn.addEventListener('click', function() {
    let btn = this;
    
    // 1. Visual Effect (Make it look like it's loading)
    btn.innerHTML = "INITIALIZING...";
    btn.style.background = "#fff";     // Flash white
    btn.style.color = "#000";          // Black text
    btn.style.boxShadow = "0 0 50px white"; // Bright glow
    
    // 2. Wait 1.5 seconds, then go to Map Page
    setTimeout(() => {
        // THIS LINKS TO YOUR MAP PAGE
        // Make sure your map file is named 'map.html'
        window.location.href = "maintoruism.html"; 
    }, 1500);
});