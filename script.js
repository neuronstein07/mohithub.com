document.addEventListener("DOMContentLoaded", function () {
    const link = document.getElementById("redirectLink");

    // Wait 500ms before showing the link smoothly
    setTimeout(() => {
        link.style.opacity = "1";
    }, 500);

    // Allow user to set the link dynamically
    link.setAttribute("href", prompt("Paste the link to redirect:"));
});
