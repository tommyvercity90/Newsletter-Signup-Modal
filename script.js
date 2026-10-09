
const overlay = document.getElementById("overlay");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");
const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

// Check whether the modal was already dismissed
let modalDismissed = sessionStorage.getItem("modalDismissed") === "true";

// Function to open the modal
function openModal() {
    if (!modalDismissed) {
        overlay.classList.add("active");
    }
}

// Function to close the modal
function closeModal() {
    overlay.classList.remove("active");

    // Remember dismissal for this browser tab session
    modalDismissed = true;
    sessionStorage.setItem("modalDismissed", "true");
}

// Show modal after 3 seconds
if (!modalDismissed) {
    setTimeout(() => {
        openModal();
    }, 3000);
}

// Open modal when Subscribe Now is clicked
openModalBtn.addEventListener("click", openModal);

// Close modal using the close button
closeModalBtn.addEventListener("click", closeModal);

// Close modal when clicking the overlay
overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        closeModal();
    }
});

// Close modal using the Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("active")) {
        closeModal();
    }
});

// Validate and submit the form
newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    // Browser validation plus a basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Thank you for subscribing!";
    message.style.color = "green";

    newsletterForm.reset();

    // Close after a short delay
    setTimeout(() => {
        closeModal();
    }, 1500);
});