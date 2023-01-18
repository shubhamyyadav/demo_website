// Select all the links in the navigation menu
var navLinks = document.querySelectorAll("nav a");

// Add a click event listener to each link
navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        // Get the ID of the section to scroll to
        var sectionId = this.getAttribute("href");

        // Find the section element
        var section = document.querySelector(sectionId);

        // Scroll the section into view
        section.scrollIntoView({ behavior: "smooth" });
    });
});

// Select the contact form
var contactForm = document.querySelector("#contact form");

// Add a submit event listener to the form
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the input field values
    var name = contactForm.querySelector("#name").value;
    var email = contactForm.querySelector("#email").value;
    var message = contactForm.querySelector("#message").value;

    // Check if the form is valid
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all the fields!");
        return;
    }

    // Display a thank-you message
    var thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for your message, " + name + "! We'll get back to you soon.";
    contactForm.parentNode.appendChild(thankYouMessage);
    contactForm.remove();
});
