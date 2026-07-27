// ======================================
// Next Big Step Careers
// script.js
// ======================================

document.addEventListener("DOMContentLoaded", function () {
    console.log("Next Big Step Careers website loaded successfully!");

    // Smooth fade-in animation
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = "1";
    }, 100);
});