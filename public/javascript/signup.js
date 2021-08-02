const signupFormHandler = async function(event) {
  event.preventDefault();

const password = document.querySelector('#password-input-signup').value.trim();
const username = document.querySelector('#username-input-signup').value.trim();

console.log(password);
console.log(username);
  
  
const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username, password
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

document
.addEventListener('submit', signupFormHandler)
.querySelector('.signup-form');
