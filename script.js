// Wait for the page to load completely
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Remove the loading screen after a delay
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';

        // Fade in the main content
        setTimeout(() => {
            mainContent.style.opacity = 1;
        }, 100);
    }, 2000); // Updated to 5000ms (5 seconds)
});



function handleSubmit() {
    const imageInput = document.getElementById("imageUpload");
    const popup = document.getElementById("popup");

    if (imageInput.files.length > 0) {
        // If a file is selected
        popup.textContent = "✅ Successfully Uploaded! 🔥";
        popup.style.backgroundColor = "#023020"; // Green background
    } else {
        // If no file is selected
        popup.textContent = "😩 Please upload an image! 🤝";
        popup.style.backgroundColor = "#960100"; // Red background
    }

    // Show the popup
    popup.style.display = "block";

    // Hide the popup after 3 seconds
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
}







 // Toggle Detected Prices Section
 function toggleDetectedPrices() {
    const detectedPrices = document.getElementById("detectedPrices");
    const isCurrentlyVisible = detectedPrices.style.display === "block";

    // Toggle visibility
    detectedPrices.style.display = isCurrentlyVisible ? "none" : "block";
}






// Example for price history chart functionality
const chartContainer = document.querySelector(".chart");
const selectElement = document.getElementById("itemSelector");

selectElement.addEventListener("change", () => {
    chartContainer.innerHTML = `Price history for ${selectElement.value}`;
});
