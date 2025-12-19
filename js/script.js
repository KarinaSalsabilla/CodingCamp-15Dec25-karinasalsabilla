document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !phone || !message) {
    alert('All fields are required');
    return;
  }

  document.getElementById('welcomeText').innerText = 'Hi, ' + name;
  document.getElementById('rName').innerText = name;
  document.getElementById('rEmail').innerText = email;
  document.getElementById('rPhone').innerText = phone;
  document.getElementById('rMessage').innerText = message;
  document.getElementById('rTime').innerText = new Date().toLocaleString();
});