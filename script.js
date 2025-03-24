function validateForm() {
    // Clear previous error message
    document.getElementById("error-message").innerHTML = "";

    // Get form values
    var name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Name validation: check if the name is empty
    if (name.trim() === "") {
        document.getElementById("error-message").innerHTML = "Name is required.";
        return false; // Prevent form submission
    }

    // Email validation: check if the email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("error-message").innerHTML = "Please enter a valid email address.";
        return false; // Prevent form submission
    }

    // Message validation: check if the message is empty
    if (message.trim() === "") {
        document.getElementById("error-message").innerHTML = "Message is required.";
        return false; // Prevent form submission
    }

    // If all fields are valid, the form will be submitted
    alert("Form submitted successfully!");
    return true; // Allow form submission
}
