const loginFormHandler = async function(event) {
  event.preventDefault();

  const passwordEl = document.querySelector('#password-input-login');
  const usernameEl = document.querySelector('#username-input-login');

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to login');
  }
};

document
.addEventListener('submit', loginFormHandler)
.querySelector('.login-form');
  