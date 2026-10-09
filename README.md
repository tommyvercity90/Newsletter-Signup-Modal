# 📬 Newsletter Signup Modal

A responsive and interactive newsletter signup modal built using **HTML5, CSS3, and JavaScript**. The popup appears automatically after a short delay and allows users to subscribe by entering a valid email address.

## ✨ Features

* ⏱️ **Automatic Popup** — Modal appears after 3 seconds.

* 📧 **Email Validation** — Validates the email address before submission.

* ❌ **Close Button** — Dismiss the modal using the close button.

* 🖱️ **Overlay Click** — Close the modal by clicking outside it.

* ⌨️ **Escape Key Support** — Dismiss the modal using the Escape key.

* 💾 **Session Storage** — Remembers dismissal during the current browser tab session.

* 🎨 **Smooth Animations** — Includes transitions and popup effects.

* 📱 **Responsive Design** — Works on desktop, tablet, and mobile devices.

* ✅ **Success Message** — Displays a confirmation message after valid form submission.

## 🛠️ Technologies Used

* **HTML5** — Structures the webpage and signup form.

* **CSS3** — Provides styling, responsive layouts, and animations.

* **JavaScript** — Handles timers, modal interactions, email validation, and session storage.

## 📂 Project Structure

```
newsletter-signup-modal/
│
├── index.html       # Main HTML structure
├── style.css        # Styling and animations
├── script.js        # Modal and form functionality
└── README.md        # Project documentation
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

* A modern web browser.

* A code editor such as Visual Studio Code.

### Installation

**1. Clone the repository**

```
git clone https://github.com/YOUR-USERNAME/newsletter-signup-modal.git
```

**2. Navigate to the project folder**

```
cd newsletter-signup-modal
```

**3. Open the project**

Open `index.html` directly in your browser, or use the Live Server extension in Visual Studio Code.

No additional dependencies or installations are required.

## 💻 How It Works

### 1. Automatic Modal Display

The JavaScript `setTimeout()` function displays the modal after 3 seconds.

```
setTimeout(() => {
    openModal();
}, 3000);
```

### 2. Opening and Closing the Modal

CSS classes control the modal's visibility and animations.

```
overlay.classList.add("active");    // Open modal
overlay.classList.remove("active"); // Close modal
```

### 3. Email Validation

A regular expression checks the basic email format before showing the success message.

```
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email address.";
    return;
}
```

### 4. Preventing Repeated Popups

The project uses `sessionStorage` to remember when the modal has been dismissed.

```
sessionStorage.setItem("modalDismissed", "true");
```


## 🎯 Learning Objectives

This project helps practice:

* DOM manipulation and event listeners.

* Using `setTimeout()` for delayed actions.

* CSS transitions and animations.

* HTML form validation.

* JavaScript regular expressions.

* Browser `sessionStorage`.

* Event handling for buttons, overlays, and keyboard input.

* Responsive web design.

## ⚠️ Limitations

* The form does not connect to a real newsletter service.

* Email addresses are not stored or sent to a server.

* The success message is only a front-end demonstration.

* Email validation checks the basic format but cannot confirm that an email address actually exists.

## 🔮 Future Improvements

* Integrate a newsletter API or backend.

* Add subscription data storage.

* Include a loading indicator during submission.

* Add dark mode.

* Improve accessibility with focus management and focus trapping.

* Add configurable popup delays and frequency settings.

## 📚 Useful Resources

* [MDN —](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout) `[setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)`

* [MDN — HTML Form Validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)

* [MDN —](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) `[sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)`

* [MDN — Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the repository.

2. Create a feature branch.

3. Make your changes.

4. Submit a pull request.

