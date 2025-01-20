function validateForm() {
    const name = document.getElementById('name').value;
    const division = document.getElementById('division').value;
    const branch = document.getElementById('branch').value;
    const address = document.getElementById('address').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Validate if all fields are filled out
    if (!name || !division || !branch || !address || !mobile || !email || !interest) {
        errorMessage.textContent = 'All fields are required!';
        return false; // Prevent form submission
    }

    // Validate mobile number (should be 10 digits)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        errorMessage.textContent = 'Please enter a valid mobile number (10 digits)';
        return false; // Prevent form submission
    }

    // If everything is fine, return true to submit the form
    return true;
}
