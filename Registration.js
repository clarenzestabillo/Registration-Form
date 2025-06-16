document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const dob = document.getElementById('dob').value;
  const course = document.getElementById('course').value;
  const termsAccepted = document.getElementById('terms').checked;
  if (!gender) {
    alert("Please select your gender.");
    return;
  }
  if (!termsAccepted) {
    alert("You must accept the Terms and Conditions.");
    return;
  }
  alert("Registration Successfully!");
});