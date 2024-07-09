document.addEventListener("DOMContentLoaded", function(event) {
    // Animate progress bars on page load
    animateProgressBars();
});

function animateProgressBars() {
    // Select all progress bars
    const progressBars = document.querySelectorAll('.progress-bar');

    // Loop through each progress bar and set width based on aria-valuenow attribute
    progressBars.forEach(bar => {
        const width = bar.getAttribute('aria-valuenow');
        bar.style.width = `${width}%`;
    });
}
// Function to simulate typing effect
function typeWriter(text, i, spanElement) {
    if (i < text.length) {
        spanElement.textContent += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i, spanElement);
        }, 100); // Adjust typing speed here (milliseconds)
    }
}

// Run typing effect on page load
window.addEventListener('load', function() {
    const text = "I'm Khushboo...";
    const spanElement = document.getElementById('typed-text');
    typeWriter(text, 0, spanElement);
});

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('fade-out');

    // Trigger card animations after a slight delay to ensure loading animation is visible
    setTimeout(function() {
        const animateCards = document.querySelectorAll('.animate-card');
        animateCards.forEach(function(card) {
            card.style.opacity = '1';
        });
    }, 500); // Adjust delay timing as needed
});