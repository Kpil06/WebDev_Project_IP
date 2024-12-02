document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission until validation passes

  // Clear previous error messages
  document.querySelectorAll('.error-message').forEach(msg => msg.remove());

  let isValid = true;

  // Validate First Name
  const firstName = document.getElementById('first-name');
  if (firstName.value.trim() === '') {
      isValid = false;
      showError(firstName, 'First Name is required.');
  }

  // Validate Last Name
  const lastName = document.getElementById('last-name');
  if (lastName.value.trim() === '') {
      isValid = false;
      showError(lastName, 'Last Name is required.');
  }

  // Validate Email
  const email = document.getElementById('email');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email.value.trim())) {
      isValid = false;
      showError(email, 'Please enter a valid email address.');
  }

  // Validate Reason for Inquiry
  const reason = document.getElementById('reason');
  if (reason.value === '') {
      isValid = false;
      showError(reason, 'Please select a reason for your inquiry.');
  }

  // Validate Message
  const message = document.getElementById('message');
  if (message.value.trim() === '') {
      isValid = false;
      showError(message, 'Message cannot be empty.');
  }

  // Submit the form if validation passes
  if (isValid) {
      alert('Form submitted successfully!');
      event.target.submit();
  }
});

function showError(element, message) {
  const error = document.createElement('div');
  error.className = 'error-message';
  error.textContent = message;
  element.parentNode.insertBefore(error, element.nextSibling);
}
