document.getElementById('login-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  if (response.ok) {
    localStorage.setItem('token', data.token);
    window.location.href = 'dashboard.html';
  } else {
    alert('Login failed: ' + data);
  }
});

document.getElementById('register-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  const response = await fetch('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });
  if (response.ok) {
    alert('User registered successfully');
    window.location.href = 'login.html';
  } else {
    alert('Registration failed: ' + response.statusText);
  }
});

document.getElementById('logout-button')?.addEventListener('click', () => {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  if (token && window.location.pathname === '/dashboard.html') {
    // Decode the token to get the username (this is a simplified example, in a real app use a JWT library)
    const payload = JSON.parse(atob(token.split('.')[1]));
    document.getElementById('username').textContent = payload.userId;
  }
});
