document.addEventListener("DOMContentLoaded", function () {
    // Add JavaScript functionality here
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        // Handle form submission (e.g., send data to a server)
        alert("Form submitted!");
    });
});
