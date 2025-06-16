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


  if (!fullname || !email || !password || !phone || !dob || !course) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!gender) {
    alert("Please select your gender.");
    return;
  }

  if (!termsAccepted) {
    alert("You must accept the Terms and Conditions.");
    return;
  }

  if (!/^\d+$/.test(phone)) {
    alert("Please enter a valid phone number (digits only).");
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters long.");
    return;
  }

  alert("Registration Successful!");

});

document.getElementById('phone').addEventListener('input', function(e) {
  this.value = this.value.replace(/[^0-9]/g, '');
});
